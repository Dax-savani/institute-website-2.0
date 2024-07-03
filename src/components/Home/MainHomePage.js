import React, {useEffect, useRef} from "react";
import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import logoB from "../../assets/images/herosection/B.png";
import logoJ from "../../assets/images/herosection/J.png";
import logoS from "../../assets/images/herosection/S.png";
import cap from "../../assets/images/herosection/cap.png";
import jbslogo from "../../assets/images/herosection/jbslogo.png";
import EastRoundedIcon from '@mui/icons-material/EastRounded';

//Placement Partners
import p1 from "../../assets/images/placementPartners/p1.png";
import p2 from "../../assets/images/placementPartners/p2.png";
import p3 from "../../assets/images/placementPartners/p3.png";

//courses

import c1 from '../../assets/images/courses/Rectangle 19.png'
import c2 from '../../assets/images/courses/Rectangle 20.png'
import c3 from '../../assets/images/courses/Rectangle 21.png'
import c4 from '../../assets/images/courses/Rectangle 22.png'
import c5 from '../../assets/images/courses/Rectangle 23.png'


import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const MainHomePage = () => {
    const logoBRef = useRef(null);
    const logoJRef = useRef(null);
    const logoSRef = useRef(null);
    const capRef = useRef(null);
    const logoRef = useRef(null);
    const theme = useTheme();

    const isXlScreen = useMediaQuery(theme.breakpoints.down("1450"));
    const isLgScreen = useMediaQuery(theme.breakpoints.down("1050"));
    const isMdScreen = useMediaQuery(theme.breakpoints.down("900"));
    const isSmScreen = useMediaQuery(theme.breakpoints.down("800"));
    const isXScreen = useMediaQuery(theme.breakpoints.down("500"));
    const stopAnimation = useMediaQuery(theme.breakpoints.down("700"));

    const {contextSafe} = useGSAP();
    const courseData = [

        {
            title: "UI/UX Designing",
            desc: "Full Stack Development refers to the development of both front end(client side) and back end(server side) portions of web application....",
            img: c2
        },
        {
            title: "Game Development",
            desc: "Full Stack Development refers to the development of both front end(client side) and back end(server side) portions of web application....",
            img: c3
        },
        {
            title: "Web Development",
            desc: "Full Stack Development refers to the development of both front end(client side) and back end(server side) portions of web application....",
            img: c4
        },
        {
            title: "Flutter Development",
            desc: "Full Stack Development refers to the development of both front end(client side) and back end(server side) portions of web application....",
            img: c5
        },
        {
            title: "Full-Stack Development",
            desc: "Full Stack Development refers to the development of both front end(client side) and back end(server side) portions of web application....",
            img: c1
        },
    ]

    function dekstopAnimation() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".heroSection",
                scroller: "body",
                scrub: isXlScreen? 4 : 5,
                start:isXlScreen? "top 10%" : "top top",
                end:isXlScreen? "bottom 150%" : "bottom 90%",
                markers: true,
                ease: "power1.inOut",
            },
        })
            .to(
                logoBRef.current,
                {
                    duration: 3,
                    top: "27px",
                    scale: 0.625,
                    rotate: 0,
                    zIndex: 2,
                },
                "logo"
            )
            .to(
                logoJRef.current,
                {
                    duration: 3,
                    top: "-30px",
                    left: "0px",
                    scale: 0.5,
                    rotate: 0,
                    zIndex: 3,
                },
                "logo"
            )
            .to(
                logoSRef.current,
                {
                    duration: 3,
                    top: "-50px",
                    right: "-360px",
                    scale: 0.47,
                    rotate: 0,
                    zIndex: 2,
                },
                "logo"
            )
            .to(capRef.current, {
                top: "290px",
                left: "100px",
                scale: 1,
                rotate: -25,
                zIndex: 3,
                duration: 2,
            })
            .to(".letteredLogo", {
                duration: 1,
                opacity: 0,
            })

            .to(".mainLogo", {
                duration: 1,
                opacity: 1,
            })
            .to(".mainLogo", {
                duration: 3,
                scale: stopAnimation ? 1.5 : 2,
                right: stopAnimation ? "35%" : "7%",
                y: stopAnimation ? 200 : 380,
            })
            .to(".mainLogo", {
                duration: 4,
                right: stopAnimation ? "35%" : "45%",
                y: isMdScreen ? (stopAnimation ? (isXScreen ? 1150 : 1400) : 950) : 750,
                scale: 2.5,
                rotate: 360,
            })
            .to(".mainLogo", {
                duration: 2,
                right: "90%",
                y: isMdScreen ? isXScreen ? 1400 : 1250 : 1070,
                scale: 0,
            })
            .to(".colorAni", {
                scale: 1,
            }, "button")
            .to(".animationBtn",
                {
                    color: "#fff",
                }, "button"
            ).to(".logo3",
                {
                    rotate: 360,
                    scale: "1",
                }
            )
    }

    function mobileAnimation() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".heroSection",
                scroller: "body",
                scrub: 3,
                start: "top 100%",
                end: "bottom 100%",
                markers: true,
                ease: "power1.inOut",
            },
        })
        tl.to(logoRef.current, {
            y: -50,
            duration: 3,
            opacity: 1,
        }).to(logoRef.current, {
            opacity: 0,
            y: -100,
            duration: 1,
        })
            .to(logoRef.current, {
                opacity: 0,
                y: -100,
                duration: 1,
            })
            .to(".mainLogo", {
                duration: 1,
                opacity: 1,
            })
            .to(".mainLogo", {

                duration: 3,
                scale: 1.5,
                right: stopAnimation ? "35%" : "7%",
                y: stopAnimation ? 200 : 380,
            })
            .to(".mainLogo", {
                duration: 4,
                right: stopAnimation ? "35%" : "45%",
                y: isMdScreen ? (stopAnimation ? (isXScreen ? 1150 : 1400) : 950) : 750,
                scale: 2,
                rotate: 360,
            })
            .to(".mainLogo", {
                duration: 3,
                right: "90%",
                y: isMdScreen ? isXScreen ? 1400 : 1250 : 1070,
                scale: 0,
            })
            .to(".colorAni", {
                scale: 1,
            }, "button")
            .to(
                ".animationBtn",
                {
                    color: "white !important",
                },
                "button"
            )
    }


    useEffect(function contextSafe() {
        if (isXScreen) {
            mobileAnimation();
        } else {
            dekstopAnimation();
        }

    }, []);
    return (
        <>
            <Box className="heroSection" sx={{mb: {xs:"25px",md: "50px",lg:"100px"}}}>
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "60vh",
                        }}
                    >
                        <Box
                            sx={{
                                width: {md: "626px", sm: "550px"},
                                textAlign: "center",
                                mt: {sm: "50px", lg: "140px"},
                            }}
                        >
                            <Typography
                                component={"h2"}
                                sx={{
                                    fontWeight: "600",
                                    lineHeight: "1.3",
                                    fontSize: {xs: "23px", sm: "30px", md: "40px"},
                                    position: "relative",
                                }}
                            >
                                <Box sx={{display: {xs: "block", sm: "none"}}}>
                                    <img
                                        src={cap}
                                        alt="cap"
                                        style={{
                                            position: "absolute",
                                            left: "50%",
                                            top: "-60px",
                                            transform: "translateX(-55%) scale(0.7)",
                                        }}
                                    />
                                </Box>
                                Empowering Businesses with Intelligence Solutions
                            </Typography>
                            <Typography
                                component={"p"}
                                sx={{
                                    my: {lg: "23px", xs: "15px"},
                                    fontSize: {xs: "12px", md: "14px"},
                                    fontWeight: "500",
                                    width: "80%",
                                    marginInline: "auto",
                                    color: "textGray",
                                }}
                            >
                                We apply technology, intelligence, and human expertise to build
                                revolutionary solutions for a better sustainability.
                            </Typography>
                            <button className="btn-blue">Get in Touch</button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            textAlign: "center",
                            display: "flex",
                            mb: "60px",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            className="letteredLogo"
                            sx={{
                                backgroundColor: "red",
                                width: "280px",
                                display: stopAnimation ? "none" : "block",
                                position: "relative",
                            }}
                        >
                            <img
                                src={cap}
                                alt={cap}
                                className="cap"
                                ref={capRef}
                                style={{
                                    position: "absolute",
                                    top: isXlScreen
                                        ? isLgScreen
                                            ? isMdScreen
                                                ? isSmScreen
                                                    ? "-422px"
                                                    : "-490px"
                                                : "-460px"
                                            : "-345px"
                                        : "-410px",
                                    left: "55px",
                                }}
                            />
                            <img
                                src={logoJ}
                                alt="Logo J"
                                ref={logoJRef}
                                className="logoB"
                                style={{
                                    position: "absolute",
                                    top: isXlScreen ? "-400px" : "-480px",
                                    zIndex: "-1",
                                    left: isXlScreen
                                        ? isMdScreen
                                            ? "-370px"
                                            : "-600px"
                                        : "-850px",
                                    transform: "translate(-50%) rotate(-55deg)",
                                }}
                            />
                            <img
                                src={logoB}
                                alt="Logo B"
                                ref={logoBRef}
                                className="logoB"
                                style={{
                                    position: "absolute",
                                    top: isXlScreen
                                        ? isLgScreen
                                            ? "-1000px"
                                            : "-800px"
                                        : "-910px",
                                    zIndex: "-1",
                                    left: "50%",
                                    transform: "translate(-50%) rotate(48deg)",
                                }}
                            />
                            <img
                                src={logoS}
                                alt="Logo B"
                                ref={logoSRef}
                                className="logoS"
                                style={{
                                    position: "absolute",
                                    top: isXlScreen ? "-300px" : "-440px",
                                    zIndex: "-1",
                                    right: isXlScreen
                                        ? isMdScreen
                                            ? "-700px"
                                            : "-980px"
                                        : "-1230px",
                                    transform: "translate(-50%) rotate(150deg)",
                                }}
                            />
                        </Box>
                    </Box>
                    <Box
                        ref={logoRef}
                        sx={{
                            textAlign: "center",
                            opacity: "0",
                            mb: "50px",
                            display: stopAnimation ? "block" : "none",
                        }}
                    >
                        <img src={jbslogo} alt="logo"/>
                    </Box>
                </Container>

                <Container sx={{position: "relative"}}>
                    <Box sx={{mt: stopAnimation ? "0px" : "550px"}}>
                        <Typography
                            component={"h2"}
                            sx={{fontWeight: 700, fontSize: "24px", textAlign: "center"}}
                        >
                            Our Placement Partners
                        </Typography>
                        <Box sx={{mt: "40px"}}>
                            <Grid container>
                                <Grid
                                    item
                                    md={3}
                                    xs={6}
                                    sx={{
                                        textAlign: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: "80px",
                                            objectFit: "contain",
                                            opacity: 0,
                                            position: "absolute",
                                            right: isLgScreen ? "65%" : "75%",
                                            mb: "20px",
                                        }}
                                        className="mainLogo"
                                    >
                                        <img src={jbslogo} alt="logo" height={"100%"}/>
                                    </Box>
                                </Grid>
                                <Grid
                                    item
                                    md={3}
                                    xs={6}
                                    sx={{
                                        textAlign: "center",
                                        alignSelf: "center",
                                    }}
                                >
                                    <Box>
                                        <img src={p1} alt="logo" height={"100%"}/>
                                    </Box>
                                </Grid>
                                <Grid
                                    item
                                    md={3}
                                    xs={6}
                                    sx={{
                                        textAlign: "center",
                                        alignSelf: "center",
                                        mt: {xs: "40px", md: "0"},
                                    }}
                                >
                                    <Box>
                                        <img src={p2} alt="logo" height={"100%"}/>
                                    </Box>
                                </Grid>
                                <Grid
                                    item
                                    md={3}
                                    xs={6}
                                    sx={{
                                        textAlign: "center",
                                        alignSelf: "center",
                                        mt: {xs: "40px", md: "0"},
                                    }}
                                >
                                    <Box>
                                        <img src={p3} alt="logo" height={"100%"}/>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box sx={{mt: "200px"}}>
                        <Grid container>
                            <Grid item xs={12} sm={9}>
                                <Typography
                                    component={"h2"}
                                    sx={{fontWeight: "700", fontSize: "34px"}}
                                >
                                    At the crossroads os imagination and innovation, JBS IT
                                    INSTITUTE stands as a guilding light.
                                </Typography>
                                <Typography
                                    sx={{color: "textGray", letterSpacing: 0.4, mt: "45px"}}
                                >
                                    Welcome to JBS IT INSTITUTE's world where every line of code
                                    is a stroke on the canvas of progress, and every student is an
                                    artist shaping the future. Join us on a journey where
                                    creativity meets technology, and Innovation knows no bounds.
                                    where each keystroke weaves a narrative of progress, and every
                                    learner is a visionary architect of tomorrow's landscape.
                                    Embark with us on an odyssey where the fusion of imagination
                                    and technology propels us beyond conventional boundaries, and
                                    ingenuity becomes our guiding star. Join our vibrant community
                                    where innovation thrives, and every challenge is an
                                    opportunity to redefine the possibilities. Together, let's
                                    paint a masterpiece of innovation and excellence, leaving an
                                    indelible mark on the canvas of the future.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{mt: stopAnimation ? "300px" : "400px"}}></Box>
                    <Box sx={{mt: stopAnimation ? "350px" : "500px"}}>
                        <Box>
                            <Button
                                className="animationBtn"
                                sx={{
                                    position: "relative",
                                    borderRadius: "30px",
                                    px: "23px",
                                    backgroundColor: "white",
                                    border: "1px solid #1F1754 !important",
                                    color: "#1F1754",
                                    // color: "#fff",
                                    overflow: "hidden",
                                    zIndex: "1",
                                }}
                                variant="outlined"
                            >
                                01/05
                                <Box
                                    className="colorAni"
                                    sx={{
                                        position: "absolute",
                                        height: "100%",
                                        zIndex: "-1",
                                        width: "100%",
                                        borderRadius: "30px",
                                        transform: "scale(0)",
                                        backgroundColor: "#1F1754",
                                    }}
                                ></Box>
                            </Button>
                        </Box>
                    </Box>
                    <Box mt={"40px"}>
                        <Grid container spacing={5}>
                            {courseData?.map((item) => (
                                <Grid item md={4} sm={6} xs={12}>
                                    <Box sx={{
                                        position: "relative",
                                        height: "362px",
                                        // width: {sm:"384px",xs: "100%"},
                                        borderRadius: "17px",
                                        overflow: "hidden",
                                        '&:hover .details': {top: "55%"}
                                    }}>
                                        <Box sx={{position: "absolute", height: "100%", width: "100%"}}><img
                                            src={item.img} alt={item.img}
                                            style={{height: "100%", width: "100%"}}/></Box>
                                        <Box sx={{
                                            position: "absolute",
                                            height: "100%",
                                            width: "100%",
                                            background: " linear-gradient( rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 1) 100%)"
                                        }}></Box>
                                        <Box sx={{
                                            position: "absolute",
                                            color: "white",
                                            px: {sm: "30px", xs: "20px"},
                                            top: "88%",
                                            transition: "0.5s"
                                        }} className={"details"}>
                                            <Box sx={{
                                                fontSize: "21px",
                                                fontWeight: "600",
                                                mb: "18px"
                                            }}>{item.title}</Box>
                                            <Box sx={{
                                                fontSize: "12px",
                                                letterSpacing: "0.6px",
                                                fontWeight: "300"
                                            }}>{item.desc}</Box>
                                            <Box sx={{
                                                backgroundColor: "white",
                                                width: "100%",
                                                p: "15px",
                                                py: "13px",
                                                borderRadius: "30px",
                                                mt: "10px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                position: "relative"
                                            }}>
                                                <Box sx={{color: "black", fontSize: "15px", fontWeight: "600"}}>Know
                                                    More</Box>
                                                <Box sx={{
                                                    color: "#fff",
                                                    backgroundColor: "darkBlue",
                                                    position: "absolute",
                                                    top: "50%",
                                                    right: "1%",
                                                    py: "4px",
                                                    px: "8px",
                                                    borderRadius: "50%",
                                                    transform: "translateY(-50%)"
                                                }}><EastRoundedIcon sx={{mt: "3px"}}/></Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                            <Grid item md={4} sm={6} xs={12}>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    width: "100%"
                                }}>
                                    <img src={jbslogo} alt={jbslogo} className={"logo3"}
                                         style={{transform: "scale(0)"}}/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>

            </Box>
        </>
    );
};

export default MainHomePage;
