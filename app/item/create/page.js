"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateItem = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = { title, description, price, image, email: "test@test.test" };

        const response = await fetch("http://localhost:3000/api/item/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authentication": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(newItem),
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message);
            router.push("/"); // Redirect to the homepage or another page
            router.refresh();
        } else {
            console.error("Failed to create item");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Image URL:</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Item</button>
        </form>
    );
};

export default CreateItem;