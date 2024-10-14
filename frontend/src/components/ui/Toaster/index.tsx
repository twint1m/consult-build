import React, { useEffect } from "react";
import styled from "styled-components";

const ToastContainer = styled.div<{ type: string }>`
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: ${({ type }) => (type === "success" ? "#4caf50" : "#f44336")};
    color: white;
    padding: 15px;
    border-radius: 5px;
    margin: 10px 0;
    transition: opacity 0.5s ease;
    z-index: 999;
`;

interface ToasterProps {
    message: string;
    type: "success" | "error";
    onClose: () => void;
}

const Toaster: React.FC<ToasterProps> = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return <ToastContainer type={type}>{message}</ToastContainer>;
};

export default Toaster;
