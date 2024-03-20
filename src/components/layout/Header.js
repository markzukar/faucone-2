import React, { useState } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Drawer } from 'antd';
import { RiSearchLine } from "react-icons/ri";
import { MdOutlineSegment } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import Language from './Language';



const Navbar = () => {

    const navigate = useNavigate()

    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);

    const handleMouseEnter1 = () => {
        setShowDropdown1(true);
    };

    const handleMouseLeave1 = () => {
        setShowDropdown1(false);
    };

    const handleMouseEnter2 = () => {
        setShowDropdown2(true);
    };

    const handleMouseLeave2 = () => {
        setShowDropdown2(false);
    };

    const handleMouseEnter3 = () => {
        setShowDropdown3(true);
    };

    const handleMouseLeave3 = () => {
        setShowDropdown3(false);
    };


    return (

        <>
            <div className='tw-py-1'>Company</div>

            <NavDropdown title='Industries' show={showDropdown1} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className='tw-py-1 tw-cursor-pointer'>
                <NavDropdown.Item onClick={() => navigate('/industries')}>Aerospace and Defence</NavDropdown.Item>
                <NavDropdown.Item>Aviation</NavDropdown.Item>
                <NavDropdown.Item>Automotive</NavDropdown.Item>
                <NavDropdown.Item>Banking & Finance</NavDropdown.Item>
                <NavDropdown.Item>Capital Markets</NavDropdown.Item>
                <NavDropdown.Item>Construction & Engineering</NavDropdown.Item>
                <NavDropdown.Item>Chemical & Process</NavDropdown.Item>
                <NavDropdown.Item>Consumer Goods</NavDropdown.Item>
                <NavDropdown.Item>Energy & Utilities</NavDropdown.Item>
                <NavDropdown.Item>FMCG</NavDropdown.Item>
                <NavDropdown.Item>Food & Beverage</NavDropdown.Item>
                <NavDropdown.Item>Healthcare</NavDropdown.Item>
                <NavDropdown.Item>Industrial Manufacturing</NavDropdown.Item>
                <NavDropdown.Item>Insurance</NavDropdown.Item>
                <NavDropdown.Item>Life Sciences</NavDropdown.Item>
                <NavDropdown.Item>Manufacturing Industries</NavDropdown.Item>
                <NavDropdown.Item>Media & Entertainment</NavDropdown.Item>
                <NavDropdown.Item>Mining & Natural Resources</NavDropdown.Item>
                <NavDropdown.Item>Oil & Gas</NavDropdown.Item>
                <NavDropdown.Item>Public Sector</NavDropdown.Item>
                <NavDropdown.Item>Retail</NavDropdown.Item>
                <NavDropdown.Item>Telecom</NavDropdown.Item>
                <NavDropdown.Item>Travel</NavDropdown.Item>
                <NavDropdown.Item>Transport, Logistics & Hospitality</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Our Brands' show={showDropdown2} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} className='tw-py-1'>
                <NavDropdown.Item onClick={() => navigate('/ourbrands')}>Faucone Business</NavDropdown.Item>
                <NavDropdown.Item>Faucone Digital</NavDropdown.Item>
                <NavDropdown.Item>Faucone Technologies</NavDropdown.Item>
                <NavDropdown.Item>Faucone Solutions</NavDropdown.Item>
                <NavDropdown.Item>Faucone Finance</NavDropdown.Item>
                <NavDropdown.Item>Faucone Consultancy</NavDropdown.Item>
                <NavDropdown.Item>Faucone Studios</NavDropdown.Item>
                <NavDropdown.Item>Faucone Advertising</NavDropdown.Item>
                <NavDropdown.Item>Faucone Space</NavDropdown.Item>
                <NavDropdown.Item>Faucone Design</NavDropdown.Item>
                <NavDropdown.Item>Faucone Prints</NavDropdown.Item>
                <NavDropdown.Item>Faucone Accounting</NavDropdown.Item>
                <NavDropdown.Item>Faucone Legal</NavDropdown.Item>
                <NavDropdown.Item>Faucone Supplies</NavDropdown.Item>
                <NavDropdown.Item>Faucone Academy</NavDropdown.Item>
                <NavDropdown.Item>Faucone Overseas</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title='Services' show={showDropdown3} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} className='tw-py-1'>
                <NavDropdown.Item onClick={() => navigate('/services')}>Multi-Dimensional Branding & Marketing</NavDropdown.Item>
                <NavDropdown.Item>360 degree Advertising Solutions</NavDropdown.Item>
                <NavDropdown.Item>Brand Transformation</NavDropdown.Item>
                <NavDropdown.Item>Scaling Technology for Development</NavDropdown.Item>
                <NavDropdown.Item>Interlinking Business Concept</NavDropdown.Item>
                <NavDropdown.Item>1:1 Business Coaching</NavDropdown.Item>
                <NavDropdown.Item>Innovative Entrepreneurship Process</NavDropdown.Item>
                <NavDropdown.Item>Implementing a Quality Business Process</NavDropdown.Item>
                <NavDropdown.Item>Revenue lox</NavDropdown.Item>
                <NavDropdown.Item>Career Planning and Development</NavDropdown.Item>
                <NavDropdown.Item>Startup Investor Connect</NavDropdown.Item>
                <NavDropdown.Item>Developing a Hybrid Work Model</NavDropdown.Item>
            </NavDropdown>

            <Link to={'/insights'} className='tw-py-1 tw-no-underline tw-text-gray-600 tw-block'>Insights</Link>
            <Link to={'/contact-us'} className='tw-py-1 tw-no-underline tw-text-gray-600 tw-block' >Contact us</Link>

            <div className='tw-bg-blue-200 tw-h-7 tw-w-7 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-p-1 '><RiSearchLine className=' ' /></div>


            <div className='tw-hidden xl:tw-block tw-outline-none tw-py-1 tw-my-1 tw-px-2'>
                <Language />
            </div>
        </>

    )
}

const Header = () => {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);

    };


    return (
        <nav className='tw-bg-blue-50 tw-flex tw-items-center tw-justify-between tw-px-5 xl:tw-px-28 tw-py-6'>

            {/* res nav bar */}
            <button onClick={showDrawer} className='xl:tw-hidden'>
                <MdOutlineSegment className='tw-text-3xl' />
            </button>

            <Drawer title={false} onClose={onClose} open={open} placement='left' width={300}>
                <div className='tw-text-gray-600 '>
                    <Navbar />
                </div>
            </Drawer>

            {/* name */}
            <div>
                <Link to={'/'} className='tw-font-abel tw-font-bold tw-text-2xl tw-tracking-[3px] tw-no-underline tw-text-[#5db6f1]'>FAUCONE</Link>
            </div>


            {/* navbar */}
            <div className='tw-hidden xl:tw-flex tw-items-center tw-gap-x-12 tw-text-gray-600'>
                <Navbar />
            </div>

            {/*res languages  */}
            {/* <div className='xl:tw-hidden tw-bg-white tw-rounded-full tw-border-2 tw-w-8 tw-h-8 tw-flex tw-justify-center tw-items-center tw-border-[#5db6f1] tw-font-bold tw-text-sm '>
                En
            
            </div> */}
            <div className='xl:tw-hidden '>
                <Language />
            </div>



        </nav>
    )
}

export default Header