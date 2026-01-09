import React from 'react'
import { useTranslation } from "react-i18next"; //sujit
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImCheckmark } from "react-icons/im";
import SpeakerButton from '../Speaker/Speaker'; //Sujit
const Dashboard = () => {
    const fileInputRef = useRef(null);
    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation(); //sujit
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setImageFile(file);
        setPreview(URL.createObjectURL(file));
    };

    const analyzeImage = () => {
        if (!imageFile) {
            alert("Please upload an image first");
            return;
        }
        navigate("/analytics", { state: { imageFile } });
    };
    return (
        <main id="main-content" className="w-full lg:w-3/4 p-8 bg-panel-bg">


            <div className="flex flex-col md:flex-row justify-between items-start mb-10">
                <div className="space-y-4">


                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900" data-i18n="head">
                            {t("head")}                         {/*Sujit*/}
                        </h1>
                        <SpeakerButton textKey="head" />        {/*Sujit*/}
                    </div>


                    <div className="flex flex-col md:flex-row justify-between items-start mb-10">


                        <div className="md:w-3/5 space-y-5">


                            <div className="flex items-start gap-2">
                                <p className="text-gray-700 max-w-xl leading-relaxed text-sm md:text-base" data-i18n="desc">
                                   {t("longtext")}
                                </p>
                                <button className="opacity-70 text-xl hover:opacity-100" onclick="speakText('desc')"
                                    title="Listen">🔊</button>
                            </div>


                            <div className="flex flex-wrap gap-2 text-xs">
                                <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                                    Offline-first Architecture
                                </span>
                                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                                    AI-driven Decision Support
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                                    Government Guideline Aligned
                                </span>
                                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                                    Farmer-friendly UX
                                </span>
                            </div>


                            <ul className="space-y-3 text-gray-700 text-sm">

                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-0.5"><ImCheckmark /></span>
                                    <span data-i18n="d1">
                                        {t("f1")}
                                    </span>
                                    <button className="opacity-70 text-lg hover:opacity-100" onclick="speakText('d1')"
                                        title="Listen">🔊</button>
                                </li>

                                <li className="flex items-start gap-2">
                                    <span className="text-green-600"><ImCheckmark /></span>
                                    <span data-i18n="d2">
                                        {t("f2")}
                                    </span>
                                    <button className="opacity-70 text-lg hover:opacity-100" onclick="speakText('d2')"
                                        title="Listen">🔊</button>
                                </li>

                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-0.5"><ImCheckmark /></span>
                                    <span data-i18n="d3">
                                        {t("f3")}
                                    </span>
                                    <button className="opacity-70 text-lg hover:opacity-100" onclick="speakText('d3')"
                                        title="Listen">🔊</button>
                                </li>

                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-0.5"><ImCheckmark /></span>
                                    <span>
                                        {t("f4")}
                                    </span>
                                </li>

                            </ul>
                        </div>


                        <div className="md:w-2/5 mt-6 md:mt-0 flex justify-end">
                            <div
                                className="w-full rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white">
                                <img src="https://thumbs.dreamstime.com/b/farmer-milking-cow-village-india-koriya-chhattisgarh-india-farmer-taking-out-milk-mother-s-cow-udder-270282390.jpg"
                                    alt="Rural dairy farming in India" className="w-full h-64 object-cover" />
                                <div className="px-3 py-2 text-xs text-gray-500 bg-gray-50 border-t">
                                    {t("caption")}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">


                <div>
                    {!preview && (
                        <div>
                            <span className="text-xl md:text-2xl font-semibold mb-6" data-i18n="uploadphoto">{t("uploadphoto")}</span>
                            <button className="opacity-70 text-xl cursor-pointer hover:opacity-100"
                                onClick="speakText('uploadphoto')" title="Listen">🔊</button>
                            <div
                                className="bg-gray-50 p-8 rounded-xl border-2 border-dashed border-gray-300 transition duration-300 hover:border-primary-green group relative"
                                onClick={() => fileInputRef.current.click()}>

                                <div class="flex flex-col items-center justify-center text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-10 text-gray-400 group-hover:text-primary-green mb-3"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path
                                            d="M4 14.9V8.5a2.5 2.5 0 0 1 2.5-2.5h11a2.5 2.5 0 0 1 2.5 2.5v11a2.5 2.5 0 0 1-2.5 2.5H6.5a2.5 2.5 0 0 1-2.5-2.5V14.9" />
                                        <path d="m14 17-2-2-2 2" />
                                        <path d="M12 15.5V9" />
                                        <rect x="18" y="3" width="3" height="3" rx="1" />
                                    </svg>
                                    <span class="text-sm font-medium text-gray-700" data-i18n="dragdrop">{t("dragdrop")}
                                    </span>
                                    <button class="opacity-70 text-xl cursor-pointer hover:opacity-100"
                                        onclick="speakText('dragdrop')" title="Listen">🔊</button>
                                    <span class="text-xs text-gray-500 mb-4" data-i18n="limit">{t("limit")}</span>
                                    <button class="opacity-70 text-xl cursor-pointer hover:opacity-100"
                                        onclick="speakText('limit')" title="Listen">🔊</button>
                                    <span
                                        class="py-2 px-4 text-sm cursor-pointer font-semibold rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-150"
                                    >
                                        {t("upload")}
                                    </span>
                                    <button class="opacity-70 text-xl cursor-pointer hover:opacity-100"
                                        onclick="speakText('upload')" title="Listen">🔊</button>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                </div>


                                <div class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
                                    title="Maximum file size is 200MB">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                        <path d="M12 17h.01" />
                                    </svg>
                                </div>
                            </div>
                        </div>)}

                    {preview && (
                        <img
                            src={preview}
                            alt="Preview"
                            className="max-h-64 rounded-lg shadow-md"
                        />
                    )}



                    <span id="analyze-button" data-i18n="analysis"
                        class="mt-6 w-full py-3 flex cursor-pointer items-center bg-slate-600 justify-center rounded-lg bg-primary-green hover:bg-secondary-green transition duration-200 text-white font-bold shadow-xl hover:shadow-2xl"
                        onClick={analyzeImage}>

                        {t("analyze")}
                    </span>
                    <button class="opacity-70 text-xl cursor-pointer hover:opacity-100"
                        onclick="speakText('analysis')" title="Listen">🔊</button>



                    <div id="feedback-message" class="mt-4 text-sm text-center text-gray-600 hidden"></div>


                </div>
                <section class="mt-12 space-y-4">


                    <div class="flex items-center justify-between">
                        <h2 class="text-xl font-semibold text-gray-800 cursor-pointer">
                            {t("recentactivity")}
                        </h2>
                        <a href="/activity.html" class="text-sm cursor-pointer text-primary-green hover:underline">
                            {t("viewall")}
                        </a>
                    </div>


                    <div class="bg-white border border-gray-200 rounded-xl shadow-sm divide-y">


                        <div class="p-4 flex items-start gap-3">
                            <span class="text-green-600 text-lg">➕</span>
                            <div>
                                <p class="text-sm text-gray-800">
                                    {t("newanimalregistered")}
                                </p>
                                <p class="text-xs text-gray-500">
                                    C100669110
                                </p>
                            </div>
                        </div>

                        <div class="p-4 flex items-start gap-3">
                            <span class="text-blue-600 text-lg">📷</span>
                            <div>
                                <p class="text-sm text-gray-800">
                                    {t("animalidentified")}
                                </p>
                                <p class="text-xs text-gray-500">
                                    C100578424
                                </p>
                            </div>
                        </div>

                        <div class="p-4 flex items-start gap-3">
                            <span class="text-purple-600 text-lg">🧬</span>
                            <div>
                                <p class="text-sm text-gray-800">
                                    {t("genetictestcompleted")}
                                </p>
                                <p class="text-xs text-gray-500">
                                    M500677384
                                </p>
                            </div>
                        </div>

                    </div>
                </section>


            </div>
        </main>
    )
}

export default Dashboard