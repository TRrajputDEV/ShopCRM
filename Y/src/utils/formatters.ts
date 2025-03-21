// src/utils/formatters.ts
export const getInitials = (name: string): string => {
    return name ? name.split(' ').map(word => word[0]).join('').toUpperCase() : 'N/A';
};

export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};
