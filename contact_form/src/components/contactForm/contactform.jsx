import style from './contact.module.css';
import Button from '../button/button.jsx';
import { MdMessage } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { BsDisplay } from 'react-icons/bs';
import { useState } from "react";

function contactForm() {
    const [name, setName] = useState("Anshu");
    const [mail, setMail] = useState("anshu12@gmail.com");
    const [text, setText] = useState("Hii How Are You");

    const on_submit = (event) => {

        setName(event.target[0].value)
        setMail(event.target[1].value);
        setText(event.target[2].value);

        event.preventDefault();
    };


    return (
        <section className={style.container} >
            <div className={style.contact_form}  >
                <div className={style.top_btn} >

                    <Button text="VIA SUPPORT CHAT" icon={< MdMessage fontSize="24px" />} />

                    <Button text="VIA CALL" icon={< MdAddCall fontSize="24px" />} />
                </div>

                <Button text="VIA EMAIL FORM" isOutline="true" icon={<IoIosMail fontSize="24px" />} />

                <form action="" onSubmit={on_submit}>

                    <div className={style.form_controller}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="" />
                    </div>

                    <div className={style.form_controller}>
                        <label htmlFor="mail">Email</label>
                        <input type="email" name="mail" id="" />
                    </div>

                    <div className={style.form_controller}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows={6} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "end" }} >
                        <Button text="SUBMIT" fontSize="24px" /> </div>
                </form >

                <div>
                    {
                        "Name :- " + name + " Mail :- " + mail + " Text :-" + text
                    }
                </div>
            </div>

            <div className={style.contact_img} >
                <img src="./images/contact.svg" alt="contact image" />
            </div>

        </section>
    )
}

export default contactForm