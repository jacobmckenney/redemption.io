import React from "react";
import NavBar from "../NavBar";
import Note from "./Note";

interface NotesProps {}

const Notes: React.FC<NotesProps> = () => {
    return (
        <div className="w-screen h-screen bg-primary1">
            <NavBar />
            <div className="flex flex-col items-center space-y-4 mt-10">
                {["content1", "content2", "content3"].map((content) => (
                    <Note key={content} content={content} />
                ))}
            </div>
        </div>
    );
};

export default Notes;
