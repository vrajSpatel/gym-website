/*
-slider of image 
-information about gym area and how big it is

-bath area and restroom with lokerroom
*/

import aboutimg1 from '../assets/aboutimg1_dumbbell.jpg'
import aboutimg2 from '../assets/aboutimg2_machine.jpg'
import aboutimg3 from '../assets/aboutimg3_swim.jpg'
import aboutimg4 from '../assets/aboutimg4_akhada.png'
import aboutimg5 from '../assets/aboutimg5_boxing.jpg'
import aboutimg6 from '../assets/aboutimg6_cafe.jpg'
import aboutimg7 from '../assets/aboutimg7_powerlift.jpg'
import aboutimg8 from '../assets/aboutimg8_cardio.jpg'
import aboutimg9 from '../assets/aboutimg9_photoshot.jpg'
import aboutimg10 from '../assets/aboutimg10_lockerroom.avif'

import React from 'react'

export default function Exploregym() {
    return (
        <div className='Exploregym'>
            <div className="slider_container">
                <div className="slider_wrapper">
                    <img src={aboutimg6} alt="1" />
                    <img src={aboutimg2} alt="2" />
                    <img src={aboutimg3} alt="3" />
                    <img src={aboutimg4} alt="4" />
                    <img src={aboutimg5} alt="5" />
                    <img src={aboutimg10} alt="6" />
                </div>
            </div>

            <div className="information-of-gym">
                <div className="info-section-gym">
                    <div className="infotext" data-aos='zoom-in-up' data-aos-delay='100' data-aos-duration='1000' >
                        <h1>Dumbbell Area </h1>
                        <p>Our gym has 690 squarefoot big dumbbell area.</p>
                        <p>We have perticular sections for all dumbellls , like for begginer , for intermidiate and advance.</p>
                        <p>range is 5lbs-180lbs</p>
                    </div>
                    <div className="infoimage" data-aos='zoom-in-down' data-aos-delay='100' data-aos-duration='1000'>
                        <img src={aboutimg1} alt="" />
                    </div>
                </div>

                <div className="info-section-gym">
                    <div className="infoimage" data-aos='zoom-in-down' data-aos-delay='100' data-aos-duration='1000'>
                        <img src={aboutimg2} alt="" />
                    </div>
                    <div className="infotext" data-aos='zoom-in-up' data-aos-delay='100' data-aos-duration='1000'>
                        <h1>Machine Area</h1>
                        <p>We have all machine for all perticular part of our body.</p>
                        <p>Also the machine for all types of exercise replacement of dumbbells.</p>
                        <p>For convience we have two same machine that help you to not wait for long time.</p>
                    </div>
                </div>

                <div className="info-section-gym">
                    <div className="infotext" data-aos='zoom-in-up' data-aos-delay='100' data-aos-duration='1000'>
                        <h1>Swimming-Pool</h1>
                        <p>Yes!!! we have a pool in our gym , not for sports ...</p>
                        <p>It has also a shower area in gym so if you don't want to go home for bath after gym ; don't you worry we are here.</p>
                        <p>Pool also consider as a cardio section because swimming is the best cardio for fatloss.</p>
                    </div>
                    <div className="infoimage" data-aos='zoom-in-down' data-aos-delay='100' data-aos-duration='1000'>
                        <img src={aboutimg3} alt="" />
                    </div>
                </div>

                <div className="info-section-gym">
                    <div className="infoimage" data-aos='zoom-in-down' data-aos-delay='100' data-aos-duration='1000'>
                        <img src={aboutimg4} alt="" />
                    </div>
                    <div className="infotext" data-aos='zoom-in-up' data-aos-delay='100' data-aos-duration='1000'>
                        <h1>Akhada</h1>
                        <p>You want more power ?? Akhada is here..</p>
                        <p>You have hindu genetics then you are perfect for our gym because we have pure akhada with desi mitti.</p>
                        <p>we have all equipment that use in akhada ; you can do all the thing you can do in outdoor akhada.</p>
                    </div>
                </div>

                <div className="info-section-gym">
                    <div className="infotext" data-aos='zoom-in-up' data-aos-delay='100' data-aos-duration='1000'>
                        <h1>Boxing Area </h1>
                        <p>You want to strong with shreded then you can also access the boxing area of gym.</p>
                        <p>You dream to learn boxing once in your life so you can full fill your wish in our gym.</p>
                        <p>We also have professnol trainer for boxing with no extra cost ; include with your membership </p>
                    </div>
                    <div className="infoimage" data-aos='zoom-in-down' data-aos-delay='100' data-aos-duration='1000'>
                        <img src={aboutimg5} alt="" />
                    </div>
                </div>

                <div className="info-section-gym">
                    <div className="infoimage" data-aos='zoom-in-down' data-aos-delay='100' data-aos-duration='1000'>
                        <img src={aboutimg6} alt="" />

                    </div>
                    <div className="infotext" data-aos='zoom-in-up' data-aos-delay='100' data-aos-duration='1000'>
                        <h1>Diet Cafe</h1>
                        <p>Gym has a personal cafe for gym members , but is payable cafe .</p>
                        <p>Our cafe made you all day diet , and also delevior to your home. </p>
                        <p>And diet is made according to your plan like cut and bulk.</p>
                    </div>
                </div>

                <div className="info-section-gym">
                    <div className="infotext" data-aos='zoom-in-up' data-aos-delay='100' data-aos-duration='1000'>
                        <h1>PowerLifting Area</h1>
                        <p>To consider all the hipe of who is stronger we have perticular powerlifting area.</p>
                        <p>Deadlift,Squats,BenchPress.</p>
                        <p>In this area all wieghts are made of iron and there are all type of rods use in all this type.</p>
                    </div>
                    <div className="infoimage" data-aos='zoom-in-down' data-aos-delay='100' data-aos-duration='1000'>
                        <img src={aboutimg7} alt="" />

                    </div>
                </div>

                <div className="info-section-gym">
                    <div className="infoimage" data-aos='zoom-in-down' data-aos-delay='100' data-aos-duration='1000'>
                        <img src={aboutimg8} alt="" />
                    </div>
                    <div className="infotext" data-aos='zoom-in-up' data-aos-delay='100' data-aos-duration='1000'>
                        <h1>Cardio Section</h1>
                        <p>For fatloss cardio is important and for that good cardio machine is also important.</p>
                        <p>Gym has all type of cardio machine that you can imagine.</p>
                        <p>also mention before that we have swimming area.</p>
                    </div>
                </div>

                <div className="info-section-gym">
                    <div className="infotext" data-aos='zoom-in-up' data-aos-delay='100' data-aos-duration='1000'>
                        <h1>Photoshoot Area</h1>
                        <p>We Notice you have good body , but can't shoot your photo properly</p>
                        <p>Don't worry we have A photoshoot area for you so you can also shoot your amazing body and post it on social media.</p>
                        <p>Area is big so in one time 4 person shooot in same time without desterbing others</p>
                    </div>
                    <div className="infoimage" data-aos='zoom-in-down' data-aos-delay='100' data-aos-duration='1000'>
                        <img src={aboutimg9} alt="" />

                    </div>
                </div>

                <div className="info-section-gym">
                    <div className="infoimage" data-aos='zoom-in-down' data-aos-delay='100' data-aos-duration='1000'>
                        <img src={aboutimg10} alt="" />
                    </div>
                    <div className="infotext" data-aos='zoom-in-up' data-aos-delay='100' data-aos-duration='1000'>
                        <h1>LockerRoom</h1>
                        <p>We have Lockerroom with 300 lockers.</p>
                        <p>you can put your personal things in your locker so you don't need to bring all your thing daily</p>
                        <p>locker is with passcord so don't need to bring also and passcord is changeable and only you know it.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

