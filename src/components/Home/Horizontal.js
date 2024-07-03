import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import img1 from '../../assets/images/horizontal/scrollImg.jpg';

gsap.registerPlugin(ScrollTrigger);

function Horizontal() {
    const page2Ref = useRef(null);
    const theme = useTheme();

    const isLgScreen = useMediaQuery(theme.breakpoints.down("900px"));
    const isXlScreen = useMediaQuery(theme.breakpoints.down("500px"));

    useEffect(() => {
        const container = page2Ref.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => `+=${container.scrollWidth - window.innerWidth}`,
                scrub: 2,
                pin: true,
                anticipatePin: 1,
                markers: false,
            },
        });

        tl.to(".mainHeading", { y: -100, opacity: 1, duration: 0.5 })
            .to(".mainHeading", { y: -100, opacity: 0, duration: 0.5 })
            .to(".scrollImageContainer img", { borderRadius: "70px" })
            .to(".scrollImageContainer img", { scaleY: 0.35, scaleX: isLgScreen ? isXlScreen ? 0.7 : 0.55 : 0.35, borderRadius: "70px", duration: 1, y: -50 })
            .to(".glassmorphism", { scaleX: isLgScreen ? 1.8 : 1.3, scaleY: 1.5, borderRadius: "30px", duration: 1, opacity: 1 })
            .to(".boxDetails", {
                opacity: 1,
                visibility: "visible",
                y: 50,
                duration: 1,
            })
            .to(container, {
                x: () => -(container.scrollWidth - window.innerWidth),
                duration: 7,
                ease: "none",
            })
            .to(".glassmorphism", { opacity: 0 });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(instance => instance.kill());
        };
    }, [isLgScreen, isXlScreen]);

    return (
        <Box
            sx={{
                overflowX: "hidden",  // Hide horizontal overflow
                position: "relative", // Ensure the position is relative for proper pinning
            }}
        >
            <Box
                className="glassmorphism"
                sx={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(1)",
                    width: "50%",
                    height: "50%",
                    background: "rgba( 255, 255, 255, 0.35 )",
                    boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    backdropFilter: "blur( 6px )",
                    border: "1px solid rgba( 255, 255, 255, 0.18 )",
                    zIndex: -1,
                    pointerEvents: "none",
                    opacity: 0,
                }}
            />
            <Box
                id="page2"
                ref={page2Ref}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "500%",
                    height: "100vh",
                    overflow: "hidden",  // Ensure no overflow within the container
                    position: "relative"
                }}
            >
                {[...Array(5)].map((_, index) => (
                    <Box
                        key={index}
                        className="box"
                        sx={{ width: "100%", position: "relative", height: "100%" }}
                    >
                        {index === 0 && (
                            <Box
                                className="mainHeading"
                                sx={{
                                    position: "absolute",
                                    top: "57%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color: "white",
                                    fontWeight: "600",
                                    fontSize: { xs: "25px", sm: "40px", md: "60px" },
                                    textAlign: "center",
                                    opacity: 0,
                                    zIndex: 2,
                                }}
                            >
                                Our Impactful <br /> Services & Diverse Reach
                            </Box>
                        )}

                        <Box className="scrollImageContainer" sx={{ height: "100%", position: "relative" }}>
                            <img
                                src={img1}
                                alt="error"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}
                            />
                            <Box className="boxDetails" sx={{
                                position: "absolute",
                                px: { xs: "25px", md: "40px", lg: "100px" },
                                top: "60%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                color: "black",
                                textAlign: "center",
                                zIndex: 4,
                                width: isLgScreen ? isXlScreen ? "80%" : "60%" : "45%",
                                fontSize: "16px",
                                fontWeight: "600",
                                opacity: "0",
                                overflow: "hidden",
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 6,
                                lineHeight: "1.5em",
                            }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Corrupti, ullam? Iure sit, minima eos ducimus pariatur quam alias
                                tempore voluptatem, quidem, architecto explicabo optio ullam
                                laboriosam obcaecati voluptatem accusa
                            </Box>

                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Horizontal;
