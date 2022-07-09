import React from "react";

interface NoteProps {
    content: string;
}

const Note: React.FC<NoteProps> = ({ content }) => {
    return <div className="w-full max-w-xl bg-primary3 text-primary10">{content}</div>;
};

export default Note;
