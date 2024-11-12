import React, { useState, useEffect } from "react";
import { FileText } from "lucide-react";

const PDFViewer = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        setLoading(true);
        // Verify if the URL exists/is accessible
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to load PDF");
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadPDF();
  }, [url]);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-siemens-green"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
        <FileText size={48} />
        <p className="mt-4">Failed to load PDF: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <object data={url} type="application/pdf" className="w-full h-full">
        <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
          <FileText size={48} />
          <p className="mt-4">
            Unable to display PDF. Please{" "}
            <a
              href={url}
              download
              className="text-siemens-green hover:underline"
            >
              download
            </a>{" "}
            to view it.
          </p>
        </div>
      </object>
    </div>
  );
};

export default PDFViewer;
