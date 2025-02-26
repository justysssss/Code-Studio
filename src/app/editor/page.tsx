import React from "react";
import Header from "../(root)/_components/Header";
import EditorPanel from "../(root)/_components/EditorPanel";
import OutputPanel from "../(root)/_components/OutputPanel";
export default function Home() {
    return (
        <div className="min-h-screen">
            <div className="maw-w-[1800px] mx-auto p-4">
                <Header />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <EditorPanel />
                    <OutputPanel />
                </div>
            </div>
        </div>
    );
}
