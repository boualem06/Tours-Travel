import { useState } from "react";

const NewProduct = () => {
    const [fileInputState, setFileInputState] = useState("");
    const [previewSource, setPreviewSource] = useState("");
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [Product, setProduct] = useState({featured:false});
    const [loading, setLoading] = useState(false);
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setProduct({ ...Product, photo: reader.result });
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            setProduct({ ...Product, photo: reader.result });
            uploadImage();
        };
        reader.onerror = () => {

            setErrMsg("something went wrong!");
        };
    };

    const uploadImage = async () => {
        console.log(Product)
        try {
            setLoading(true)
            await fetch("http://localhost:5000/NewTour", {
                method: "POST",
                body: JSON.stringify(Product),
                headers: { "Content-Type": "application/json", "accestoken": localStorage.getItem('token') },
            }).then((res) => {
                setLoading(false);
                // window.location.reload();

            });
            setFileInputState("");
            setPreviewSource("");
            setSuccessMsg("Image uploaded successfully");
        } catch (err) {
            console.error(err);
            setErrMsg("Something went wrong!");
        }
    };



    return (
        <div

            className=" m-2 border-2  border-orange-600 rounded-md px-4 py-2 md:py-8 lg:py-14"
        >
            <form onSubmit={handleSubmitFile}>


                <div className="grid grid-cols1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 ">
                    <div>
                        <div className="font-bold">Title of the Tour </div>
                        <input
                            name="name"
                            onChange={(e) => { setProduct({ ...Product, title: e.target.value }); }}
                            className="w-full border px-2 py-1 rounded-md border-orange-600"
                            placeholder="Tour title"
                        ></input>
                    </div>



                    <div>
                        <div className="font-bold">city of the Tour </div>
                        <input
                            onChange={(e) => { setProduct({ ...Product, city: e.target.value }); }}
                            className="w-full border px-2 py-1 rounded-md border-orange-600"
                            placeholder="Tour city "
                        ></input>
                    </div>


                    <div>
                        <div className="font-bold">address of the Tour </div>
                        <input
                            onChange={(e) => { setProduct({ ...Product, address: e.target.value }); }}
                            className="w-full border px-2 py-1 rounded-md border-orange-600"
                            placeholder="Tour address "
                        ></input>
                    </div>

                    <div>
                        <div className="font-bold">distance of the Tour </div>
                        <input
                            type="number"
                            onChange={(e) => { setProduct({ ...Product, distance: parseInt(e.target.value) }); }}
                            className="w-full border px-2 py-1 rounded-md border-orange-600"
                            placeholder="Tour distance "
                        ></input>
                    </div>

                    <div>
                        <div className="font-bold">price of the Tour </div>
                        <input
                            type="number"
                            onChange={(e) => { setProduct({ ...Product, price: parseInt(e.target.value) }); }}
                            className="w-full border px-2 py-1 rounded-md border-orange-600"
                            placeholder="Tour price $"
                        ></input>
                    </div>
                    <div>
                        <div className="font-bold">max Group Size of the Tour </div>
                        <input
                            type="number"
                            onChange={(e) => { setProduct({ ...Product, maxGroupSize: parseInt(e.target.value) }); }}
                            className="w-full border px-2 py-1 rounded-md border-orange-600"
                            placeholder="Tour max Group Size "
                        ></input>
                    </div>


                    <div className="w-full">
                        <div className="font-bold">description of the Product </div>
                        <textarea
                            onChange={(e) => { setProduct({ ...Product, desc: e.target.value }); }}
                            rows="1"
                            className="w-full border px-2 py-2 rounded-md border-orange-600"
                            placeholder="Product description "
                        ></textarea>
                    </div>

                    

                    <div>
                        <div className="font-bold">Image of the Tour </div>
                        <input
                            id="fileInput"
                            type="file"
                            name="image"
                            className="w-full h-16 border px-4 py-4 rounded-md border-orange-600"
                            onChange={handleFileInputChange}
                            value={fileInputState}
                        />
                    </div>

                    <label class="inline-flex items-center">
                        <input onChange={(e)=>{setProduct({ ...Product, featured: e.target.checked })}} type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />
                        <span class="ml-2 text-gray-700">Featured</span>
                    </label>
                </div>


                <div className="mt-2 w-full flex justify-center items-center ">
                    {previewSource && (
                        <img
                            style={{ width: 200, height: 200 }}
                            src={previewSource}
                            className=" border px-2 py-1 rounded-md border-orange-600"
                            alt="chosen"
                        />
                    )}
                </div>


                <div className="w-full mt-4 flex justify-center items-center">
                    <button
                        type="submit"
                        className="bg-orange-600 hover:bg-orange-700 hover:font-bold text-white shadow-md px-10 py-2 rounded-md"
                    >
                        {loading ? <div>Submiting ...</div> : <div>Submit </div>}
                    </button>
                </div>

            </form>
        </div>
    );
};
export default NewProduct;