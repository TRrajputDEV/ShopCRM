// src/components/customers/CustomerAvatar.tsx
import React from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from '../../utils/formatters';

interface CustomerAvatarProps {
    name: string;
}

const CustomerAvatar: React.FC<CustomerAvatarProps> = ({ name }) => {
    return (
        <Avatar>
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
        </Avatar>
    );
};

export default CustomerAvatar;