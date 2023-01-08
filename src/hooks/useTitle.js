import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Muntasir's Photography`;
    }, [title]);
};

export default useTitle;