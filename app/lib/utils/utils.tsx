import axios from "axios";
import { toast } from "sonner";

type toastProps = {
    title: string;
    description?: string;
    showCloseButton?: boolean;
};

export const showSuccessToast = ({ title, description, showCloseButton = true }: toastProps) => {
    toast.success(title, {
        className: "first-letter:uppercase",
        description: description,
        duration: 5000,
        closeButton: showCloseButton,
    });
};

export const showErrorToast = ({ title, description, showCloseButton = true }: toastProps) => {
    toast.error(title, {
        className: "first-letter:uppercase",
        description: description,
        duration: 5000,
        closeButton: showCloseButton,
    });
};

export const handleError = (error: unknown, logMessage?: string, showToastCloseButton: boolean = true) => {
    let message = "Uh, oh! Something went wrong";

    // Is axios error
    if (axios.isAxiosError(error)) {
        if (error.response && error.response.data) {
            // The request was made and the server responded with a status code
            if (error.response.data.message) message = error.response.data.message;
            else message = error.response.data.error;
        } else {
            // Handle situation when the request was not sent
            // maybe due to network error
            message = error.message;
        }
    } else if (error instanceof Error) {
        message = error.message;
    } else {
        message = "An unexpected error occurred";
    }

    showErrorToast({ title: message, showCloseButton: showToastCloseButton });
    console.error(logMessage, message);
};

// Capitalize the first letters of a string
export const capitalizeFirstLetters = (string: string): string => {
    return string
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
        .join(" ");
};
