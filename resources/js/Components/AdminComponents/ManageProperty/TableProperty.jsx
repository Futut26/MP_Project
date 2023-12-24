import InputError from "@/Components/InputError";
import { Link, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const TableProperty = ({
    meta,
    properti,
    jenis_properti,
    kategori_properti,
}) => {
    const { data, setData, post, errors, reset } = useForm({
        id_kategori_properti: "",
        nama_properti: "",
        logo: "",
        thumbnail: "",
        Lokasi: "",
        url_maps: "",
        pinvalue_min: "",
        pinvalue_max: "",
    });

    const [jenisPropertiId, setJenisPropertiId] = useState("");
    const handleJenisPropertiChange = (event) => {
        const selectedJenisPropertiId = event.target.value;
        setJenisPropertiId(selectedJenisPropertiId);
    };

    const filteredKategoriProperti = kategori_properti.filter(
        (item) => item.id_jenis_properti == jenisPropertiId
    );

    return (
        <div className="overflow-x-auto bg-white shadow">
            <div className="w-full md:pr-5  pl-3 py-4 md:relative sticky z-10 left-0 flex flex-wrap flex-col md:flex-row gap-3">
                <div className="w-full flex ">
                    <button
                        onClick={() =>
                            document
                                .getElementById("modal_tambah_properti")
                                .showModal()
                        }
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2  px-4 rounded"
                    >
                        Add Property <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>

            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-center">
                        <th>No</th>
                        <th>Nama Properti</th>
                        <th>Logo</th>
                        <th>Tumbnail</th>
                        <th>Lokasi</th>
                        <th>Pinvalue</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="">
                    {properti.map((properti, index) => (
                        <tr key={index} className="text-center">
                            <td>{index + 1}</td>
                            <td>{properti.nama_properti}</td>
                            <td className="w-40">
                                <img
                                    className="w-auto "
                                    src={`assets/img/properti/${properti.logo}`}
                                    alt=""
                                />
                            </td>
                            <td className="w-40">
                                <img
                                    className="w-auto"
                                    src={`assets/img/properti/${properti.thumbnail}`}
                                    alt=""
                                />
                            </td>
                            <td>{properti.lokasi}</td>
                            {/* nilai pinvalue konversi ke mata uang indonesia */}
                            <td>
                                {new Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                }).format(properti?.pinvalue_min)}
                                {" - "}{" "}
                                {new Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                }).format(properti?.pinvalue_max)}
                            </td>

                            <td>
                                {/* detail button */}
                                <div className="flex flex-col md:flex-row h-full w-full  md:gap-2 items-center justify-center">
                                    <Link
                                        href={`/manage_property/${properti.kd_properti}`}
                                        as="button"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Manage <i className="fas fa-tasks"></i>
                                    </Link>

                                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                        Delete <i className="fas fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <dialog id="modal_tambah_properti" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>

                    <div>
                        <h1 className="text-xl font-semibold">
                            Add Property Form
                        </h1>
                    </div>
                    <form action="" className="flex flex-col">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">
                                    Jenis Properti
                                </span>
                            </div>
                            <select
                                name="id_jenis_properti"
                                id="id_jenis_properti"
                                className="select select-bordered"
                                onChange={handleJenisPropertiChange}
                                value={jenisPropertiId}
                            >
                                {/* map jenis_properti */}
                                <option  value="">
                                    Pilih Jenis Properti
                                </option>

                                {jenis_properti?.map((item, index) => (
                                    <option key={index} value={item.id}>
                                        {item.jenis}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">
                                    Kategori Properti
                                </span>
                            </div>
                            <select
                                name="id_kategori_properti" // Ganti name menjadi id_kategori_properti
                                id="id_kategori_properti"
                                className="select select-bordered"

                            >
                                {/* map jenis_properti */}
                                <option selected value="">
                                    Pilih Kategori Properti
                                </option>

                                {filteredKategoriProperti?.map(
                                    (item, index) => (
                                        <option key={index} value={item.id}>
                                            {item.kategori}
                                        </option>
                                    )
                                )}
                            </select>
                            <InputError
                                message={errors.id_kategori_properti}
                                className="mt-1"
                            />
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">
                                    Nama Property
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full "
                            />
                        </label>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default TableProperty;
