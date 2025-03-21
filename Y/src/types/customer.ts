// src/types/customer.ts
export interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    balance: number;
}

export type NewCustomer = Omit<Customer, "id">;
