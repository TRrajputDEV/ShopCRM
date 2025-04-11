# ShopCRM System Documentation

## Overview

ShopCRM is a customer relationship management system designed for retail shops. It provides functionality to manage customer information, track balances, and perform shop-related calculations. This document explains the system architecture, data flow, and key components to help new team members understand the project.

## System Architecture

The application follows a modern frontend-backend architecture:

1. **Frontend**: React TypeScript application built with Vite
   - Component-based UI structure
   - TypeScript for type safety
   - Tailwind CSS for styling
   - Reusable UI components

2. **Backend**: PHP API endpoints
   - Served via Apache XAMPP
   - Handles CRUD operations
   - Communicates with the database

3. **Database**: MySQL (via XAMPP)
   - Stores customer information
   - Maintains transaction history

## Database Schema

The core database table is `customers`, defined as:

```sql
CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(10),  -- Limited to exactly 10 digits
    balance DECIMAL(10, 2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

Key fields:
- `id`: Unique identifier for each customer
- `name`: Customer's full name
- `email`: Customer's email address (must be unique)
- `phone`: Customer's phone number (exactly 10 digits)
- `balance`: Customer's current account balance
- Timestamps for record creation and updates

## Data Flow

### API Communication

The core of the application's data flow is the API communication layer, implemented in `useCustomerAPI.ts`. This custom hook provides a clean interface for all backend interactions:

```typescript
// Key export from useCustomerAPI.ts
export const useCustomerAPI = () => {
    // State management
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    // CRUD operations
    const fetchCustomers = async () => {...}
    const addCustomer = async (newCustomer: NewCustomer): Promise<boolean> => {...}
    const updateCustomer = async (editedCustomer: Partial<Customer>): Promise<boolean> => {...}
    const deleteCustomer = async (id: number): Promise<boolean> => {...}

    // Return API interface
    return {
        customers,
        loading,
        error,
        fetchCustomers,
        addCustomer,
        updateCustomer,
        deleteCustomer,
        setError,
    };
};
```

This hook:
1. Maintains local state of customer data
2. Provides loading and error states
3. Offers four primary functions for CRUD operations
4. Automatically handles error cases

### API Endpoints

The frontend communicates with a PHP backend located at `http://localhost/shop-api.php`. The API uses query parameters to determine the requested action:

| Endpoint | Action | Method | Purpose |
|----------|--------|--------|---------|
| `/shop-api.php?action=get_customers` | get_customers | GET | Retrieve all customers |
| `/shop-api.php?action=create_customer` | create_customer | POST | Add new customer |
| `/shop-api.php?action=update_customer` | update_customer | POST | Update existing customer |
| `/shop-api.php?action=delete_customer` | delete_customer | POST | Delete a customer |

### Error Handling

The API layer implements robust error handling with a centralized error handler:

```typescript
// From useCustomerAPI.ts
const handleError = (err: unknown) => {
    if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError<APIError>;
        const errorMessage = axiosError.response?.data?.message 
            || axiosError.message 
            || "An unexpected error occurred";
        
        console.error("API Error Details:", {
            status: axiosError.response?.status,
            message: errorMessage,
            fullError: axiosError
        });

        setError(errorMessage);
    } else if (err instanceof Error) {
        console.error("Network or Runtime Error:", err);
        setError(err.message);
    } else {
        console.error("Unknown Error:", err);
        setError("An unexpected error occurred");
    }
};
```

This handler:
1. Differentiates between Axios errors and other errors
2. Extracts relevant error messages
3. Provides detailed logging for debugging
4. Updates the error state for UI display

## Key Components

### 1. Customer Management Components

#### AddCustomerForm.tsx

This component renders a form for adding new customers with input validation:

- Validates required fields
- Ensures phone numbers are exactly 10 digits
- Validates email format
- Shows validation errors
- Calls the API to create new customers

```typescript
// Form submission handler from AddCustomerForm.tsx
const handleAddCustomer = () => {
  // Basic validations
  const errors: {[key: string]: string} = {};
  
  if (!newCustomer.name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (newCustomer.phone && newCustomer.phone.length !== 10) {
    errors.phone = 'Phone number must be exactly 10 digits';
  }
  
  // Email validation
  if (newCustomer.email && !/^\S+@\S+\.\S+$/.test(newCustomer.email)) {
    errors.email = 'Valid email is required';
  }
  
  // Update error states
  setFormErrors(errors);
  
  // Only proceed if no errors
  if (Object.keys(errors).length === 0) {
    onAdd();
  }
};
```

#### CustomerList.tsx

Displays all customers in a tabular format:
- Shows customer name, contact info, and balance
- Provides actions for each customer
- Handles selection of customers for detailed view
- Implements sorting and filtering (if available)

#### CustomerDetails.tsx

Shows detailed information about a selected customer:
- Displays all customer fields
- Provides editing capabilities
- Shows transaction history if available
- Contains tabs for different types of information

### 2. Layout Components

#### MainLayout.tsx

Provides the overall page structure:
- Includes Header and Sidebar
- Renders the main content area
- Handles responsive layout changes

#### Sidebar.tsx

Navigation component that:
- Shows menu items for different sections
- Highlights active section
- Can be collapsed on mobile devices

### 3. UI Components

The application uses a component library built with Tailwind CSS:

- `button.tsx`: Various button styles
- `input.tsx`: Form input elements
- `table.tsx`: Data table component
- `dialog.tsx`: Modal dialogs
- And many more

These components ensure consistent styling and behavior throughout the application.

## Page Structure

### CustomerManagement.tsx

The main page for customer management with this structure:

```jsx
// Pseudo-code representation of CustomerManagement.tsx structure
function CustomerManagement() {
  // Get customer data and API functions
  const { 
    customers, 
    loading, 
    error, 
    addCustomer, 
    updateCustomer, 
    deleteCustomer 
  } = useCustomerAPI();
  
  // Local state
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isAddingCustomer, setIsAddingCustomer] = useState(false);
  
  // Handle adding new customer
  const handleAddCustomer = (newCustomer) => {
    addCustomer(newCustomer);
    setIsAddingCustomer(false);
  };
  
  return (
    <MainLayout>
      {/* Header with Add Customer button */}
      <CustomerHeader onAddClick={() => setIsAddingCustomer(true)} />
      
      {/* Loading state */}
      {loading && <LoadingState />}
      
      {/* Error display */}
      {error && <ErrorAlert message={error} />}
      
      {/* Main content area */}
      <div className="flex">
        {/* Customer list sidebar */}
        <CustomerList 
          customers={customers}
          onSelect={setSelectedCustomer}
          selectedId={selectedCustomer?.id}
        />
        
        {/* Customer details main area */}
        {selectedCustomer ? (
          <CustomerDetails 
            customer={selectedCustomer}
            onUpdate={updateCustomer}
            onDelete={deleteCustomer}
          />
        ) : (
          <EmptyState message="Select a customer to view details" />
        )}
      </div>
      
      {/* Add customer form dialog */}
      {isAddingCustomer && (
        <Dialog onClose={() => setIsAddingCustomer(false)}>
          <AddCustomerForm 
            onAdd={handleAddCustomer}
            onCancel={() => setIsAddingCustomer(false)}
          />
        </Dialog>
      )}
    </MainLayout>
  );
}
```

This page:
1. Fetches customer data via the API hook
2. Manages selection state for detailed view
3. Handles adding new customers
4. Shows appropriate loading and error states

### Landing.tsx

Marketing-focused landing page with sections:
- Hero section with call to action
- Features showcase
- Testimonials from existing users
- Contact form
- FAQ section

## Type Definitions

The application uses TypeScript for type safety. Key types include:

```typescript
// From src/types/customer.ts
export interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    balance: number;
}

export type NewCustomer = Omit<Customer, "id">;
```

These types ensure consistent data structure throughout the application.

## Data Validation

The application implements validation at multiple levels:

1. **Frontend Form Validation**:
   - Required fields
   - Email format
   - Phone number format (exactly 10 digits)
   - Numeric values for balance

2. **API Request Validation**:
   - Pre-validates data before sending to server
   - Normalizes data (e.g., removing non-digits from phone)
   - Returns validation errors when needed

3. **Database Constraints**:
   - NOT NULL constraints
   - UNIQUE constraints
   - Field size limitations

## Deployment

The application is designed to run with:

1. **Frontend**: Served via Vite development server or built for production
2. **Backend**: Apache server via XAMPP
3. **Database**: MySQL via XAMPP

For local development:
1. Start XAMPP (Apache and MySQL)
2. Run the Vite development server (`npm run dev`)
3. Access the application at the local development URL

## Best Practices and Coding Standards

The codebase follows these practices:

1. **Component-Based Architecture**:
   - Each component has a single responsibility
   - Components are modular and reusable

2. **TypeScript** for static typing:
   - Interfaces define data structures
   - Props are explicitly typed
   - Functions have return type annotations

3. **Hooks Pattern** for state management:
   - Custom hooks encapsulate related functionality
   - React hooks manage component state

4. **Error Handling**:
   - Centralized error handling
   - User-friendly error messages
   - Detailed console logging for debugging

5. **Responsive Design**:
   - Mobile-first approach with Tailwind
   - Responsive layout components

## Future Enhancements

Potential areas for improvement:

1. Implement authentication and user management
2. Add transaction history for customers
3. Create reporting and analytics features
4. Implement inventory management
5. Add offline capabilities with local storage

## Conclusion

ShopCRM is a well-structured React application with TypeScript that provides retail shops with customer management capabilities. Its component-based architecture and clean API layer make it maintainable and extensible.

Understanding the data flow through the API hook, component hierarchy, and database will allow new team members to quickly get up to speed and contribute to the project.
