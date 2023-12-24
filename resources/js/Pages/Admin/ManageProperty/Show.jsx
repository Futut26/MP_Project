import TablePembiayaan from "@/Components/AdminComponents/ManageProperty/TablePembiayaan";
import TablePropertyType from "@/Components/AdminComponents/ManageProperty/TablePropertyType";
import InputError from "@/Components/InputError";
import AdminLayout from "@/Layouts/AdminLayout";
import { router, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import slugify from "slugify";

function formatToRupiah(angka) {
    if (!angka) return "";
    return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function parseFromRupiah(rupiah) {
    if (!rupiah) return 0;
    return parseInt(rupiah.replace(/\./g, ""), 10);
}

const Show = ({ ...props }) => {
    console.log(props);
    const [formattedPriceMin, setFormattedPriceMin] = useState("");
    const [formattedPriceMax, setFormattedPriceMax] = useState("");
    const [edit, setEdit] = useState(false);
    const [editPembiayaan, setEditPembiayaan] = useState(false);

    const { data, setData, post, errors, reset } = useForm({
        nama_properti: "",
        lokasi: "",
        url_maps: "",
        pinvalue_min: "",
        pinvalue_max: "",
        id_kategori_properti: "",
    });

    useEffect(() => {
        if (props.properti) {
            setData({
                nama_properti: props.properti.nama_properti || "",
                lokasi: props.properti.lokasi || "",
                url_maps: props.properti.url_maps || "",
                pinvalue_min: props.properti.pinvalue_min || "",
                pinvalue_max: props.properti.pinvalue_max || "",
                id_kategori_properti: props.properti.id_kategori_properti || "",
            });

            setFormattedPriceMin(formatToRupiah(props.properti.pinvalue_min));
            setFormattedPriceMax(formatToRupiah(props.properti.pinvalue_max));
        }
    }, [props.properti]);

    const handleChange = (e) => {
        const { name, value } = e.target;
         if (name === "pinvalue_min") {
            const numericPrice = parseFromRupiah(value);
            const formatted = formatToRupiah(numericPrice);
            const stringPrice = numericPrice.toString();
            setData((prevData) => ({ ...prevData, [name]: stringPrice }));
            setFormattedPriceMin(formatted);
        } else if (name === "pinvalue_max") {
            const numericPrice = parseFromRupiah(value);
            const formatted = formatToRupiah(numericPrice);
            const stringPrice = numericPrice.toString();
            setData((prevData) => ({ ...prevData, [name]: stringPrice }));
            setFormattedPriceMax(formatted);
        } else {
            setData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const toggleEdit = () => {
        setEdit(!edit);
    };
    const toggleEditPembiayaan = () => {
        setEditPembiayaan(!editPembiayaan);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        router.post(`/manage_property/${props.properti.slug}`, data, {
            preserveScroll: true,
            onSuccess: () => {
                setEdit(false);
            },
        });
    };

    return (
        <AdminLayout title={props.title} auth={props.auth}>
            <div className="pb-10 grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="bg-white p-5 w-full h-auto shadow-lg">
                    <div className="flex flex-col md:flex-row gap-4 md:items-center">
                        <h1 className="text-xl font-bold">
                            Tinjauan Informasi Properti
                        </h1>
                        <button
                            onClick={toggleEdit}
                            className="btn btn-secondary"
                        >
                            <i className="fas fa-edit"></i>
                            Edit Informasi Properti
                        </button>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-5">
                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="block w-full">
                                    Nama Properti
                                </label>
                                <input
                                    type="text"
                                    className="w-auto   input input-bordered input-secondary"
                                    value={data.nama_properti}
                                    name="nama_properti"
                                    id="nama_properti"
                                    onChange={handleChange}
                                    disabled={!edit}
                                />
                                <InputError
                                    message={errors.nama_properti}
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="block w-full">
                                    Lokasi
                                </label>
                                <input
                                    type="text"
                                    className="w-full  input input-bordered input-secondary"
                                    value={data.lokasi}
                                    name="lokasi"
                                    id="lokasi"
                                    onChange={handleChange}
                                    disabled={!edit}
                                />
                                <InputError
                                    message={errors.lokasi}
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="block w-full">
                                    Url Maps
                                </label>
                                <input
                                    type="text"
                                    className="w-full  input input-bordered input-secondary"
                                    value={data.url_maps}
                                    name="url_maps"
                                    id="url_maps"
                                    onChange={handleChange}
                                    disabled={!edit}
                                />
                                <InputError
                                    message={errors.url_maps}
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="block w-full">
                                    Pin Value (Minimum)
                                </label>
                                <input
                                    type="text"
                                    className="w-full input input-bordered input-secondary"
                                    value={formattedPriceMin}
                                    name="pinvalue_min"
                                    id="pinvalue_min"
                                    onChange={handleChange}
                                    disabled={!edit} // Tidak diubah saat edit tidak diizinkan
                                />
                                <InputError
                                    message={errors.pinvalue_min}
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="block w-full">
                                    Pin Value (Maksimum)
                                </label>
                                <input
                                    type="text"
                                    className="w-full input input-bordered input-secondary"
                                    value={formattedPriceMax}
                                    name="pinvalue_max"
                                    id="pinvalue_max"
                                    onChange={handleChange}
                                    disabled={!edit} // Tidak diubah saat edit tidak diizinkan
                                />
                                <InputError
                                    message={errors.pinvalue_max}
                                    className="mt-1"
                                />
                            </div>

                            <div className="flex flex-col w-full">
                                <label htmlFor="category">
                                    Ganti Kategori Properti :
                                </label>
                                <select
                                    className="rounded-md"
                                    name="id_kategori_properti"
                                    id="id_kategori_properti"
                                    value={data.id_kategori_properti}
                                    onChange={handleChange}
                                    disabled={!edit}
                                >
                                    <option disabled value="">
                                        Ganti Kategori Properti
                                    </option>
                                    {props?.kategori_properti.map(
                                        (item, index) => (
                                            <option key={index} value={item.id}>
                                                {item.kategori}
                                            </option>
                                        )
                                    )}
                                </select>
                                <InputError
                                    message={errors.category_gallery_id}
                                    className="mt-1"
                                />
                            </div>
                        </div>
                        {edit !== false && (
                            <button
                                type="submit"
                                className="btn bg-blue-500 text-white hover:bg-blue-300 mt-5"
                            >
                                Update
                            </button>
                        )}
                    </form>
                </div>

                <div className="bg-white p-5 w-full h-auto shadow-lg">
                    <TablePembiayaan
                        properti={props.properti}
                        pembiayaan={props.properti.pembiayaan}
                        opsi_pembiayaan={props.opsi_pembiayaan}
                    />
                </div>
            </div>

            <div className="pb-24 grid lg:grid-cols-1 grid-cols-1 gap-4">
                <div className="bg-white p-5 w-full h-auto shadow-lg">
                    <TablePropertyType properti={props.properti} />
                </div>
            </div>
        </AdminLayout>
    );
};

export default Show;
