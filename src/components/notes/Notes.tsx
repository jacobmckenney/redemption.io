import React, { useContext } from "react";
import NavBar from "../NavBar";
import Note from "./Note";
import { PlusIcon } from "@radix-ui/react-icons";
import { UserContext } from "../../context/userContext";
import { loggedIn } from "../../utils/helpers";
import { trpc } from "../../utils/trpc";

interface NotesProps {}

const Notes: React.FC<NotesProps> = () => {
    const { id } = useContext(UserContext);
    const utils = trpc.useContext();
    const createNote = trpc.useMutation("notes.create", {
        async onSuccess() {
            await utils.invalidateQueries(["notes.getByUser"]); // refetch
        },
    });
    const userNotes = trpc.useQuery(["notes.getByUser", { userId: id }]);

    const newNote = async () => {
        try {
            const res = await createNote.mutateAsync({
                userId: id,
                title: "",
                content: "",
            });
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="w-screen h-screen bg-primary1">
            <NavBar />
            <div className="flex flex-col items-center space-y-4 mt-10">
                {loggedIn(id) && (
                    <PlusIcon
                        onClick={() => newNote()}
                        className="text-primary10 rounded-full hover:text-error cursor-pointer"
                    />
                )}
                {userNotes.data?.map((note) => (
                    <Note key={note.id} note={note} />
                ))}
            </div>
        </div>
    );
};

export default Notes;
