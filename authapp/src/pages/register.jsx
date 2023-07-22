import Head from "next/head";
import Layout from "../../layout/layout";
import Link from "next/link";
import styles from '../styles/Form.module.css'
import Image from 'next/image'
import { HiAtSymbol,HiFingerPrint} from "react-icons/hi";
import { useState } from "react";
export default function Register() {
    return (
        <>
        <Layout>
        <Head><title>Register</title> </Head><div>
<section className="w-3/4  mx-auto flex flex-col gap-10">
<div className="title">
<h1 className="text-gray-800 text-3xl font-bold py-4">Register</h1>
<p className="w-3/4 mx-auto text-gray-400">Lorem ipsum dolor sit amet consectetur adipiscing elit </p>
</div>
{/*form */}
<form className="flex flex-col gap-5">
    <div className={styles.input_group}>
        <input type="text"
        name="Username"
        placeholder="Username"
        className={styles.input_text}
        />
        <span className="icon flex items-center px-4">
        <HiAtSymbol size={25}/>
        </span>
    </div>
    <div className={styles.input_group}>
        <input type="email"
        name="email"
        placeholder="Email"
        className={styles.input_text}
        />
        <span className="icon flex items-center px-4">
        <HiAtSymbol size={25}/>
        </span>
    </div>
    <div className={styles.input_group}>
        {/* password show  */}
        <input type={`${true? "text":"password"}`}
        name="password"
        placeholder="Password"
        className={styles.input_text}
        />
        {/* password onclick */}
         <span className="icon flex items-center px-4" onClick={()=> setShow(!show)}>
        <HiFingerPrint size={25}/>
        </span>
    </div>
    <div className={styles.input_group}>
        {/* password show  */}
        <input type={`${true? "text":"password"}`}
        name="cpassword"
        placeholder="Confirm Password"
        className={styles.input_text}
        />
        {/* password onclick */}
         <span className="icon flex items-center px-4" onClick={()=> setShow(!show)}>
        <HiFingerPrint size={25}/>
        </span>
    </div>
    {/*login buttons */}
    <div>
        <button type="submit" className={styles.button}>
            Login
        </button>
    </div>
</form>
{/*bottom */}
<p className="text-center text-gray-400">
    don't have an account yet? <Link className="text-blue-700"href={'/register'}>Sign Up</Link>
</p>
     </section>
        </div>
        </Layout>
        
        </>
    );
}