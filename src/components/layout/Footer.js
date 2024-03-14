import React from 'react'
import india from '../../img/india.PNG'
import logo from '../../img/logo.PNG'
import { TfiYoutube } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            {/* 11th section - footer*/}
            <section className='tw-bg-blue-50 '>
                <div className='tw-flex lg:tw-justify-between lg:tw-px-52 tw-py-20'>
                    <img src={india} alt="" className='tw-w-[20%] lg:tw-w-auto ' />
                    <img src={india} alt="" className='tw-w-[20%] lg:tw-w-auto ' />
                    <img src={india} alt="" className='tw-w-[20%] lg:tw-w-auto ' />
                    <img src={india} alt="" className='tw-w-[20%] lg:tw-w-auto ' />
                    <img src={india} alt="" className='tw-w-[20%] lg:tw-w-auto ' />
                </div>

                <main className='tw-bg-white tw-flex tw-justify-between tw-pt-12 lg:tw-pt-0 tw-relative tw-px-5 lg:tw-px-5 tw-text-sm tw-font-semibold lg:tw-mt-8' >
                    <div className='tw-text-gray-600 lg:tw-flex lg:tw-pl-10 lg:tw-gap-x-8 lg:tw-py-3 '>
                        <p className='tw-py-3 lg:tw-py-0'>Company</p>
                        <p className='tw-py-3 lg:tw-py-0'>Industries</p>
                        <p className='tw-py-3 lg:tw-py-0'>Our Brands</p>
                        <p className='tw-py-3 lg:tw-py-0'>Services</p>
                        <p className='tw-py-3 lg:tw-py-0'>Career</p>
                        <p className='tw-py-3 lg:tw-py-0'>Contact Us</p>
                    </div>

                    <img src={logo} alt="" className='tw-h-28 lg:tw-h-40 tw-rounded-full tw-absolute tw-top-[7%] lg:tw-top-[50%] tw-left-1/2 tw-transform -tw-translate-x-1/2 -tw-translate-y-1/2 ' />

                    <div className='tw-text-right lg:tw-text-left tw-text-gray-600 lg:tw-flex lg:tw-pl-20 lg:tw-gap-x-4 lg:tw-py-3 ' >
                        <p className='tw-py-4 lg:tw-py-0'>Community</p>
                        <p className='tw-py-4 lg:tw-py-0'>Faucone for Startups</p>
                        <p className='tw-py-4 lg:tw-py-0'>Partner with us</p>
                        <p className='tw-py-4 lg:tw-py-0'>Customer Stories</p>
                        <p className='tw-py-4 lg:tw-py-0'>Affiliate Program</p>
                    </div>
                </main>

                <div className='tw-pt-16 tw-pb-10 lg:tw-mt-8 tw-px-10 tw-flex tw-items-center tw-justify-center tw-gap-x-6 lg:tw-gap-x-14' >
                    <GrFacebookOption className='tw-text-slate-800 tw-border-2 tw-p-1 tw-border-slate-800 tw-rounded-full tw-text-3xl' />
                    <TiSocialInstagram className='tw-text-slate-800 tw-border-2 tw-p-1 tw-border-slate-800 tw-rounded-full tw-text-3xl' />
                    <FaLinkedinIn className='tw-text-slate-800 tw-border-2 tw-p-1 tw-border-slate-800 tw-rounded-full tw-text-3xl' />
                    <BsTwitterX className='tw-text-slate-800 tw-border-2 tw-p-1 tw-border-slate-800 tw-rounded-full tw-text-3xl' />
                    <FaThreads className='tw-text-slate-800 tw-border-2 tw-p-1 tw-border-slate-800 tw-rounded-full tw-text-3xl' />
                    <TfiYoutube className='tw-text-slate-800 tw-border-2 tw-p-1 tw-border-slate-800 tw-rounded-full tw-text-3xl' />
                </div>

                <div className='lg:tw-flex tw-justify-center tw-gap-x-2'>
                    <p className='tw-text-center tw-text-slate-500 tw-font-semibold'>sales@faucone.com<span className='tw-hidden lg:tw-inline-block'>,</span></p>
                    <p className='tw-text-center tw-text-slate-500 tw-font-semibold tw-mt-5 lg:tw-mt-0'> support@faucone.com</p>
                </div>
                <p className='tw-text-center tw-text-slate-500 tw-font-semibold tw-mt-5'>1800 309 4377</p>
                <p className='tw-text-center tw-text-slate-500 tw-font-semibold tw-mt-5 tw-pb-16'>www.faucone.com</p>
            </section>

            {/* 12th section - last line*/}
            <section className='tw-bg-blue-200 lg:tw-flex lg:tw-items-center tw-justify-between tw-px-9'>
                <main className='lg:tw-order-2 tw-flex tw-items-center tw-justify-around tw-text-gray-600 tw-font-semibold tw-text-sm lg:tw-gap-x-12'>
                    <div className='tw-text-right lg:tw-text-left  tw-grid lg:tw-grid-flow-col tw-py-12 lg:tw-py-7 tw-gap-y-5 lg:tw-gap-y-0 lg:tw-gap-x-12 lg:tw-items-center'>
                        <p>Security</p>
                        <p>IPR Complaints</p>
                        <p>Anti-spam Policy</p>
                        <p>Terms of Service</p>
                    </div>

                    <div className='tw-grid lg:tw-grid-flow-col tw-py-12 lg:tw-py-7 tw-gap-y-5 lg:tw-gap-y-0 lg:tw-gap-x-12 lg:tw-items-center'>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                        <p>Abuse Policy</p>
                        <p>Disclaimer</p>
                    </div>
                </main>

                <p className='tw-text-[#4168a3] tw-font-medium tw-text-center tw-py-10 lg:tw-py-0'>&copy; 2023 Faucone. All Rights Reserved.</p>
            </section>
        </>
    )
}

export default Footer