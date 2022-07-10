import React, { useState } from "react";
import LabeledInput from "../LabeledInput";
import * as rhf from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NOTE_SCHEMA } from "../../constants/validation-schemas/note";
import { trpc } from "../../utils/trpc";
import { Cross2Icon } from "@radix-ui/react-icons";

interface NoteType {
    id: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    content: string;
    title: string;
}

interface NoteProps {
    note: NoteType;
}

const Note: React.FC<NoteProps> = ({ note }) => {
    const utils = trpc.useContext();
    const noteUpdater = trpc.useMutation("notes.update");
    const noteDeleter = trpc.useMutation("notes.delete");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = rhf.useForm({ resolver: yupResolver(NOTE_SCHEMA) });

    const updateNote = async (data: any) => {
        try {
            console.log(data);
            const res = await noteUpdater.mutateAsync({ id: note?.id, ...data });
            utils.invalidateQueries(["notes.getByUser"]); // refetch
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    };

    const deleteNote = async () => {
        try {
            const res = await noteDeleter.mutateAsync({ id: note?.id });
            utils.invalidateQueries(["notes.getByUser"]); // refetch
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    };

    const [textAreaVal, setTextAreaVal] = useState(note?.content ?? "");

    return (
        <form
            onSubmit={handleSubmit(updateNote)}
            className="w-full max-w-xl bg-primary3 text-primary10 flex flex-col p-5"
        >
            <LabeledInput name="title" register={register} defaultValue={note?.title}>
                Title:
            </LabeledInput>
            <textarea
                rows={10}
                cols={25}
                className="bg-primary1"
                value={textAreaVal}
                {...register("content")}
                onChange={(e) => setTextAreaVal(e.target.value)}
                onBlur={handleSubmit((data) => updateNote(data))}
            />
            <Cross2Icon onClick={deleteNote} className="text-primary11 hover:text-primary9 cursor-pointer" />
        </form>
    );
};

export default Note;
