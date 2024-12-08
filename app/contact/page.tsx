import { ChevronRight, Clock, MapPin, Phone, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

import Image from "next/image";
import Features from "../components/Features";
import InputGroup from "../components/Input";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactPage = () => {
  return (
    <div>
      <header className='text-center py-28 bg-[url("/images/banners/shop.png")] bg-cover bg-fixed bg-no-repeat bg-left'>
        <Image
          src="/images/furniro-icon.png"
          width={70}
          height={70}
          alt="Furniro"
          className="mx-auto"
        />
        <h1 className="font-medium text-5xl mb-4">Contact</h1>
        <nav className="flex justify-center">
          <ul className="flex items-center space-x-2 font-medium text-base">
            <li className="font-medium">
              <Link href="/">Home</Link>
            </li>
            <li>
              <ChevronRight />
            </li>
            <li className="font-light">Contact</li>
          </ul>
        </nav>
      </header>

      <section className="wrapper lg:max-w-[900px] lg:py-20 py-10">
        <h2 className="font-semibold lg:text-4xl text-3xl text-center mb-2">
          Get In Touch With Us
        </h2>
        <p className="text-base text-center text-[#9F9F9F] lg:w-[650px] lg:mx-auto">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:mt-32">
          <div className="col-span-1 lg:col-span-5 p-2">
            <div className="flex items-start gap-4 mb-10">
              <MapPin size={60} className="stroke-black" />
              <div className="mt-5">
                <h5 className="font-medium text-2xl mb-2">Address</h5>
                <p className="text-base">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-10">
              <Phone size={40} className="stroke-black" />
              <div className="mt-5">
                <h5 className="font-medium text-2xl mb-2">Phone</h5>
                <p className="text-base">
                  <a className="hover:text-primary" href="tel:+845466789">Mobile: +(84) 546-6789</a>
                  <br />
                  <a className="hover:text-primary" href="tel:+845466789">Hotline: +(84) 456-6789</a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-10">
              <Clock size={40} className="stroke-black" />
              <div className="mt-5">
                <h5 className="font-medium text-2xl mb-2">Working Time</h5>
                <p className="text-base">
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-7 p-2">
            <div className="grid">
              <div>
                <InputGroup label="Your name" placeholder="Salman A.Ghani" />
              </div>
            </div>
            <div className="grid">
              <div>
                <InputGroup
                  label="Email address"
                  type="email"
                  placeholder="salmanpatni92@gmail.com"
                />
              </div>
            </div>

            <div className="grid">
              <div>
                <InputGroup label="Subject" placeholder="UIUX Hackathon" />
              </div>
            </div>

            <div className="grid">
              <div>
                <InputGroup
                  label="Message"
                  placeholder="Hi! i’d like to ask about"
                  inputClassName="h-32"
                />
              </div>
            </div>

            <div className="grid">
              <div>
                <button className="bg-primary text-white border border-primary rounded-lg h-12 lg:h-14 px-8 lg:px-16 text-sm lg:text-base hover:bg-white hover:text-primary hover:border-primary transition">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
    </div>
  );
};

export default ContactPage;
