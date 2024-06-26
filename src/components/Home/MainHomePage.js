import React, { useEffect, useRef } from "react";
import {
  Box,
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

//Placement Partners
import p1 from "../../assets/images/placementPartners/p1.png";
import p2 from "../../assets/images/placementPartners/p2.png";
import p3 from "../../assets/images/placementPartners/p3.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
  const stopAnimation = useMediaQuery(theme.breakpoints.down("700"));

  const { contextSafe } = useGSAP();

  useEffect(function contextSafe() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".heroSection",
        start: "top top",
        end: "bottom top",
        scrub: 6,
        ease: "power1.inOut",
      },
    });

    tl.to(logoRef.current, {
      y: -50,
      duration: 4,
      opacity: 1,
    });
    tl.to(
      logoBRef.current,
      {
        duration: 4,
        top: "27px",
        scale: 0.625,
        rotate: 0,
        zIndex: 2,
      },
      "logo"
    );

    tl.to(
      logoJRef.current,
      {
        duration: 4,
        top: "-30px",
        left: "0px",
        scale: 0.5,
        rotate: 0,
        zIndex: 3,
      },
      "logo"
    );

    tl.to(
      logoSRef.current,
      {
        duration: 4,
        top: "-50px",
        right: "-360px",
        scale: 0.47,
        rotate: 0,
        zIndex: 2,
      },
      "logo"
    );

    tl.to(capRef.current, {
      top: "290px",
      left: "100px",
      scale: 1,
      rotate: -25,
      zIndex: 3,
      duration: 2,
    });
    tl.to(".letteredLogo", {
      duration: 3,
      opacity: 0,
    });
    tl.to(logoRef.current, {
      opacity: 0,
      y: -100,
      duration: 3,
    });
    tl.to(".mainLogo", {
      duration: 3,
      opacity: 1,
    });
    tl.to(".mainLogo", {
      scale: 1.5,
      rotate: 360,
      right: stopAnimation ? "35%" : "7%",
      y: stopAnimation ? 200 : 380,
    });
  }, []);
  return (
    <>
      <Box>
        <Container maxWidth="xl" className="heroSection">
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
                width: { md: "626px", sm: "550px" },
                textAlign: "center",
                mt: { sm: "50px", lg: "140px" },
              }}
            >
              <Typography
                component={"h2"}
                sx={{
                  fontWeight: "600",
                  lineHeight: "1.3",
                  fontSize: { xs: "23px", sm: "30px", md: "40px" },
                  position: "relative",
                }}
              >
                <Box sx={{ display: { xs: "block", sm: "none" } }}>
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
                  my: { lg: "23px", xs: "15px" },
                  fontSize: { xs: "12px", md: "14px" },
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
            <img src={jbslogo} alt="logo" />
          </Box>
        </Container>

        <Container sx={{ position: "relative" }} className="heroSection">
          <Box sx={{ mt: stopAnimation ? "0px" : "550px" }}>
            <Typography
              component={"h2"}
              sx={{ fontWeight: 700, fontSize: "24px", textAlign: "center" }}
            >
              Our Placement Partners
            </Typography>
            <Box sx={{ mt: "40px" }}>
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
                    <img src={jbslogo} alt="logo" height={"100%"} />
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
                    <img src={p1} alt="logo" height={"100%"} />
                  </Box>
                </Grid>
                <Grid
                  item
                  md={3}
                  xs={6}
                  sx={{
                    textAlign: "center",
                    alignSelf: "center",
                    mt: { xs: "40px", md: "0" },
                  }}
                >
                  <Box>
                    <img src={p2} alt="logo" height={"100%"} />
                  </Box>
                </Grid>
                <Grid
                  item
                  md={3}
                  xs={6}
                  sx={{
                    textAlign: "center",
                    alignSelf: "center",
                    mt: { xs: "40px", md: "0" },
                  }}
                >
                  <Box>
                    <img src={p3} alt="logo" height={"100%"} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* </Container>

        <Container> */}
          <Box sx={{ mt: "200px" }}>
            <Grid container>
              <Grid item xs={12} sm={9}>
                <Typography
                  component={"h2"}
                  sx={{ fontWeight: "700", fontSize: "34px" }}
                >
                  At the crossroads os imagination and innovation, JBS IT
                  INSTITUTE stands as a guilding light.
                </Typography>
                <Typography
                  sx={{ color: "textGray", letterSpacing: 0.4, mt: "45px" }}
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
              {/* <Grid item xs={4}>
                <Box>

                </Box>
              </Grid> */}
            </Grid>
          </Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          laudantium, tenetur sint quasi voluptatibus laborum assumenda!
          Recusandae neque explicabo ab ipsum cum dolore nulla eligendi
          voluptatem provident natus laboriosam ut eius incidunt nihil
          exercitationem nesciunt laborum obcaecati, aperiam quis alias? Esse
          placeat molestiae delectus ipsum, dolorum vitae voluptatum, harum
          possimus nostrum dicta eveniet recusandae beatae porro repudiandae
          assumenda dolor ullam quaerat sapiente natus exercitationem maxime eos
          maiores. Animi, totam. Veritatis quae, cupiditate quaerat at nam iusto
          quidem voluptatem commodi aliquid et molestiae ipsam ea quis officia
          unde error? Maiores totam debitis assumenda quae consequatur minima
          aperiam veritatis dolore in sequi autem recusandae dolores cupiditate
          dolorum quidem nostrum vel, odio ipsum ea eaque commodi a! Totam,
          atque quas. Vel reprehenderit fugiat deleniti? Molestias vel expedita,
          quas amet quod, explicabo rem laboriosam quaerat eius, error maiores
          corrupti inventore asperiores excepturi exercitationem placeat
          necessitatibus optio neque est! Dicta voluptatum adipisci veritatis
          recusandae, odit similique sunt harum debitis beatae quae aliquam
          nostrum repellendus facilis. Molestiae commodi nam optio a minus earum
          mollitia enim. Omnis quaerat quo, sunt iure voluptatibus esse beatae
          ex voluptates, sit, neque perspiciatis? Recusandae odio hic unde
          libero dignissimos, numquam vitae aut quod nesciunt eligendi ipsam
          aspernatur perspiciatis. Porro sed, beatae animi nobis temporibus
          totam aut voluptas tenetur voluptatibus sequi quos laudantium ipsa
          dolores cumque nesciunt quas eius odio quia! Nesciunt fuga reiciendis
          repudiandae, libero doloribus dolore? Qui nobis numquam id eligendi
          minus cum unde! Id eos debitis quasi rerum quia? Adipisci sint
          molestiae alias quaerat itaque beatae vero dolore, nam magni a iusto
          pariatur. Veritatis aliquid voluptas quas impedit unde cum mollitia
          eveniet numquam, ducimus obcaecati libero beatae architecto laborum!
          Dolorem necessitatibus reiciendis praesentium, suscipit pariatur
          voluptate, eaque totam deleniti in tempore perspiciatis ex saepe quas,
          minima maxime aliquam beatae officiis! Voluptates numquam enim hic
          fugiat quos iure magnam nostrum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perferendis tempore labore asperiores
          aperiam? Dolores sint incidunt officia natus quasi, sit quia! Dolore
          veritatis quaerat aspernatur, laudantium optio omnis tempora
          temporibus ad vero, inventore in ab? Sapiente quis minus in saepe at
          hic dolor velit debitis cupiditate. Consequuntur ab voluptates labore
          aspernatur magnam aperiam eos nemo ratione nihil repellendus sint
          possimus maiores in at minima hic facilis magni vero explicabo, qui
          repellat impedit fuga. Esse id veniam nesciunt suscipit perspiciatis
          delectus nisi, similique accusantium, officia dolor iste quos sapiente
          quaerat, magni fugiat recusandae neque optio molestiae possimus nihil
          officiis corrupti laboriosam? Saepe quos animi consectetur
          exercitationem modi alias, quibusdam accusamus, dolores id dolorem
          aspernatur enim quaerat cumque at aliquam ipsa assumenda facere. Iusto
          ea non deleniti provident, itaque cum quasi quibusdam sequi mollitia
          repellat ducimus illum, natus fuga doloribus, dolorum blanditiis ullam
          culpa asperiores a sed ratione voluptatum amet in. Unde provident vero
          nostrum dignissimos molestias amet doloremque nulla ex. Omnis ex fugit
          explicabo neque sunt, itaque debitis. Corrupti ad, magni eaque
          accusamus commodi tempora. Tempore, harum ut neque non numquam
          voluptatibus illum praesentium laboriosam ea, dolores nobis, quis at
          doloremque similique magnam maxime animi ipsa maiores. Eos ratione
          cumque error, reprehenderit maxime earum veniam velit saepe molestias
          quam. Sequi porro in fugiat quae corporis blanditiis voluptatem quia
          saepe harum? Magni est, exercitationem doloribus tenetur ipsam,
          maiores, quas harum nisi officiis quae sit asperiores quo praesentium
          quod incidunt quos libero odit aspernatur minima suscipit qui? Vitae,
          enim sit? Iste voluptate exercitationem harum cumque praesentium
          sequi, architecto voluptatum alias ea quod minus nostrum tenetur iusto
          ipsum quas accusantium quibusdam itaque laudantium magni quaerat id
          enim? At, deleniti placeat! Aspernatur quasi, molestias exercitationem
          commodi quas tempore beatae fugiat ipsum, id repellat autem. Quidem
          nobis sequi cupiditate fuga eligendi amet, animi quisquam illum optio
          saepe labore ipsum enim possimus earum autem molestias suscipit, totam
          a nemo sunt molestiae cum omnis? Ipsam vel iste aliquam odit
          consequatur, similique impedit veniam incidunt eos cum ipsa hic
          obcaecati, corporis reprehenderit natus tempore nesciunt quas quidem
          saepe accusantium officia nobis ea in delectus. Nobis atque earum
          suscipit mollitia enim, sit necessitatibus ad quam, fugiat animi
          excepturi, laudantium adipisci sunt et velit facilis maiores fuga.
          Consectetur alias neque, tenetur debitis nobis commodi beatae
          deleniti, quis necessitatibus, corporis iste suscipit nam voluptates
          mollitia ab quas excepturi itaque natus cumque totam? Nisi odit
          officiis maiores natus aspernatur nam magnam deleniti veritatis
          corporis. Non labore incidunt error? Totam sed consequatur
          dignissimos? Illum debitis temporibus sit, incidunt illo provident
          ipsa sequi non nisi corrupti perferendis minus quo suscipit id
          voluptas et dignissimos, facere labore explicabo consequatur modi
          maxime blanditiis esse! Ipsa ad repellat tenetur ducimus, nihil cum
          unde ipsam consequatur suscipit temporibus modi excepturi cupiditate
          commodi deleniti non consequuntur deserunt atque officia inventore?
          Ipsa esse necessitatibus illum sunt voluptatum natus. Autem numquam
          repellat atque nemo doloremque! Quam necessitatibus nobis omnis
          laboriosam eligendi delectus vero, repudiandae corrupti cumque facilis
          facere aliquam autem quaerat molestias! Ullam doloremque iste esse.
          Consectetur, asperiores sint magnam quam nesciunt maiores unde!
          Laborum architecto provident ipsa? Temporibus modi a culpa consectetur
          nemo ipsam reiciendis exercitationem! Sapiente quidem quasi totam
          adipisci perspiciatis, fuga asperiores atque autem reprehenderit
          obcaecati velit, dolor aspernatur soluta officiis cumque libero odit
          dicta voluptatem voluptatibus vero nesciunt iure non! Dolor alias
          deleniti hic, eligendi cupiditate consequatur quae odit animi
          doloremque. Velit mollitia quas eum praesentium quae harum, rerum,
          soluta ad ipsum facere dolore quidem nulla. Eligendi unde fugiat
          ducimus enim error pariatur deserunt maxime at ipsa, tenetur earum
          cupiditate nam quisquam explicabo eaque ullam dignissimos consectetur
          corrupti tempora architecto suscipit repellat quam debitis? Hic
          obcaecati nihil ullam voluptates rerum velit inventore delectus quo
          iusto itaque, dignissimos, atque numquam sit amet, iure odit aliquam
          magnam temporibus! Architecto harum repellendus nam qui neque ducimus
          impedit nesciunt. Ipsa ducimus a repellendus possimus fuga officiis
          quas ad recusandae laboriosam nostrum illum ratione repudiandae minima
          fugit itaque rerum iure exercitationem quos tempora consequuntur
          dolor, qui veritatis? Ducimus placeat officiis obcaecati nihil, odit,
          tenetur minima impedit perspiciatis necessitatibus in libero quas
          mollitia! Reiciendis nulla harum quas! Voluptatem perferendis hic id
          temporibus est distinctio aut modi quam repellendus quod tempore
          obcaecati quo inventore reprehenderit deleniti cum, veritatis, neque
          odio beatae sapiente dicta porro veniam ab minus! Ab alias saepe
          ipsum, facere soluta, nisi voluptates obcaecati expedita dolor nulla
          recusandae? Vitae enim dicta, quam autem explicabo facilis est,
          eveniet odio excepturi veritatis nulla quisquam facere distinctio
          incidunt itaque eos debitis aspernatur doloremque ipsum illum? Minima
          quo doloribus quam ducimus nemo qui provident officia harum, quod,
          unde, at quis eligendi! Sit voluptate voluptatem inventore laudantium
          labore in. Iste impedit ullam rem dolores assumenda reiciendis soluta
          vero eos blanditiis ducimus voluptate delectus, architecto, labore
          cupiditate velit aliquam tempora amet molestiae facere esse magni aut
          officia, sed possimus? Earum laborum exercitationem nostrum, iusto
          voluptas dolorem quaerat! Provident hic adipisci ullam assumenda
          officia earum nihil ad, deleniti unde itaque modi maiores a aut culpa
          eos, fugit et sed? Quia quaerat dolores dolor, atque eveniet
          consectetur a aspernatur! Possimus, illo? Adipisci dolores eaque
          architecto alias, repellat eveniet mollitia perferendis, expedita,
          aspernatur eum tempora est reiciendis? Architecto ab nesciunt quisquam
          cum quis quidem aspernatur exercitationem, unde iusto, ipsum
          consectetur enim est maiores illum asperiores dicta. Nihil architecto
          fugit obcaecati eum corporis culpa nemo? Nam reprehenderit facilis
          ratione iure eveniet atque dolorem at itaque asperiores, accusamus
          magnam ducimus iusto, aspernatur eum quibusdam sed hic tempora
          deleniti animi architecto provident fuga? Minima nobis ipsa corporis
          labore obcaecati beatae sequi distinctio. Libero, assumenda quis magni
          et atque dignissimos numquam eveniet aliquid perspiciatis fugiat,
          aperiam illo necessitatibus corporis consequuntur qui maxime impedit
          ipsam quas nesciunt labore ab. Doloremque id, nemo doloribus qui
          nostrum officia atque. Tempore, totam dolore non maiores possimus
          aliquid nulla sequi fugiat officia rerum et, odio architecto fugit. Ut
          sit explicabo saepe ad iure deleniti voluptates nobis! Optio corporis
          possimus harum omnis. Doloremque reprehenderit pariatur temporibus
          fugit natus. Dolorem, accusantium sunt numquam, est ipsa iste
          expedita, possimus incidunt temporibus atque obcaecati inventore vitae
          laboriosam id doloribus consequuntur. Blanditiis itaque soluta modi
          dolorem!
        </Container>
      </Box>
    </>
  );
};

export default MainHomePage;
