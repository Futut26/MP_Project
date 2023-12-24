import TableJenisProperti from '@/Components/AdminComponents/ManageProperty/TableJenisProperti'
import TableProperty from '@/Components/AdminComponents/ManageProperty/TableProperty'
import TablePropertyCategory from '@/Components/AdminComponents/ManageProperty/TablePropertyCategory'
import TablePropertyType from '@/Components/AdminComponents/ManageProperty/TablePropertyType'
import AdminLayout from '@/Layouts/AdminLayout'

import React, { useState } from 'react'


const Index = ({...props}) => {
     console.log(props)

    const [propertyActive, setPropertyActive] = useState(true);
    const [categoryPropertyActive, setCategoryPropertyActive] = useState(false);
    const [jenisPropertyActive, setJenisPropertyActive] = useState(false);

    const toggleProperty = () => {
        setPropertyActive(!propertyActive);
        setCategoryPropertyActive(false);
        setJenisPropertyActive(false);

    };
    const toggleCategoryProperty = () => {
        setCategoryPropertyActive(!categoryPropertyActive);
        setJenisPropertyActive(false);
        setPropertyActive(false);

    };
    const toggleJenisProperty = () => {
        setJenisPropertyActive(!jenisPropertyActive);
        setPropertyActive(false);
        setCategoryPropertyActive(false);

    };
    return (
        <AdminLayout title={props.title} auth={props.auth} >
            <div className="w-full h-full">
                <header className="h-auto px-4 py-2 mb-2 w-full border bg-white shadow-sm">
                    <ul className="flex md:gap-10 md:justify-start items-center justify-around font-medium">
                        <li
                            className={`hover:border-b-2 hover:border-slate-400 px-3 w-full md:w-auto text-center cursor-pointer ${
                                propertyActive
                                    ? "border-b-2 border-slate-400"
                                    : ""
                            }`}
                            onClick={toggleProperty}
                        >
                            Property
                        </li>
                        <li
                            className={`hover:border-b-2 hover:border-slate-400 px-3 w-full md:w-auto text-center cursor-pointer ${
                                categoryPropertyActive
                                    ? "border-b-2 border-slate-400"
                                    : ""
                            }`}
                            onClick={toggleCategoryProperty}
                        >
                            Property Category
                        </li>

                        <li
                            className={`hover:border-b-2 hover:border-slate-400 px-3 w-full md:w-auto text-center cursor-pointer ${
                                jenisPropertyActive
                                    ? "border-b-2 border-slate-400"
                                    : ""
                            }`}
                            onClick={toggleJenisProperty}
                        >
                            Property Type
                        </li>

                    </ul>
                </header>

                <div>
                    {propertyActive && props.properti.data && (
                        <>
                            <TableProperty
                             meta={props.properti.meta}
                             properti={props.properti.data}
                            jenis_properti={props.jenis_properti.data}
                            kategori_properti={props.kategori_properti.data}
                             />

                        </>
                    )}
                </div>

                <div>
                    {categoryPropertyActive && props.kategori_properti.data && (
                        <>
                            <TablePropertyCategory
                             meta={props.kategori_properti.meta}
                             kategori_properti={props.kategori_properti.data} />

                        </>
                    )}
                </div>

                <div>
                    {jenisPropertyActive && props.jenis_properti.data && (
                        <>
                            <TableJenisProperti
                             meta={props.jenis_properti.meta}
                             jenis_properti={props.jenis_properti.data} />
                        </>
                    )}
                </div>
            </div>
        </AdminLayout>
    )
}
export default Index

