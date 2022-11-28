const app = Vue.createApp({
    data() {
        return {
            name: 'Digilance',
            spinner: false,
            profile: '',
            api: 'https://script.google.com/macros/s/AKfycby9lloP3QLrXUZMXlcPYuohoAGmQJj66CQrM_E6mYqSNxbwi8E5kazzWmaI4cmC2e0/exec'
        }
    },
    mounted() {

        this.spinner = true;
        var api = this.api;

        fetch(api).then(res => res.json()).then(res => {
            console.log(res)
            this.profile = res
            this.spinner = false

        })
    }
})

app.component('menu-icon', {
    template:
        /*html */
        `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list menu-icon" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
    `,

})

app.component('navbar-section', {
    template:
        /*html*/
        `
    <header class="w-100 d-flex justify-content-start align-items-center px-4 gap-3">
        <i class="fs-1 m-0 menu bi bi-list" data-bs-toggle="offcanvas" href="#offcanvasExample"></i>
        <section class="brand">
            <img src="logo.png" alt="logo" class="py-3" width="100">
        </section>
        <section>
            <div class="offcanvas bg-glass text-light offcanvas-start" tabindex="-1" id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Digilance</h5>
                    <i class="fs-3 bi bi-arrow-left" data-bs-dismiss="offcanvas" aria-label="Close"></i>
                </div>
                <div class="offcanvas-body">
                    <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolorem?</p>
                    <div class="d-flex justify-content-evenly fs-3 text">
                        <i class=" bi bi-facebook"></i>
                        <i class=" bi bi-instagram"></i>
                        <i class=" bi bi-dribbble"></i>
                        <i class=" bi bi-whatsapp"></i>
                    </div>
                    <hr>
                    <div class="w-100 text-center d-flex flex-column align-items-center gap-3">
                        <a href="#home" class="ls-2 w-100 shadow-sm rounded p-3">HOME</a>
                        <a href="#digitalMarketing" class="ls-2 w-100 shadow-sm rounded p-3">ABOUT</a>
                        <a href="#digitalExc" class="ls-2 w-100 shadow-sm rounded p-3">SERVICES</a>
                        <a href="#team" class="ls-2 w-100 shadow-sm rounded p-3">OUR TEAM</a>
                        <a href="#contact" class="ls-2 w-100 btn-contact text-light rounded p-3">CONTACT</a>
                    </div>
                </div>
            </div>
        </section>
        <nav>
            <div class="position-relative nav-link d-flex justify-content-center align-items-center flex-column">
                <img src="/assets/img/d1.png" alt="divider" class="img-fluid position-absolute top-up start-0 z-back">
                <div class="w-fit d-flex justify-content-start align-items-start flex-column">
                    <a href="#home">HOME</a>
                    <div class="nav-hover"></div>
                </div>

            </div>
            <div class="nav-link d-flex justify-content-center align-items-center flex-column">
                <div class="w-fit d-flex justify-content-start align-items-start flex-column">
                    <a href="#digitalMarketing">ABOUT</a>
                    <div class="nav-hover"></div>
                </div>
            </div>
            <div class="nav-link d-flex justify-content-center align-items-center flex-column">
                <div class="w-fit d-flex justify-content-start align-items-start flex-column">
                    <a href="#digitalExc">SERVICES</a>
                    <div class="nav-hover"></div>
                </div>
            </div>
            <div class="nav-link d-flex justify-content-center align-items-center flex-column">
                <div class="w-fit d-flex justify-content-start align-items-start flex-column">
                    <a href="#team">OUR TEAM</a>
                    <div class="nav-hover"></div>
                </div>
            </div>
            <div class="nav-link d-flex justify-content-center align-items-center flex-column">
                <div class="w-fit d-flex justify-content-start align-items-start flex-column">
                    <a href="#contact">CONTACT</a>
                    <div class="nav-hover"></div>
                </div>
            </div>
        </nav>
    </header>
    `
})

app.component('hero-section', {
    template:
        /*html*/
        `
    
    <section>
        <section class="container my-5 ">
            <div class="row justify-content-center gap-5 p-13">
                <section class="hero-image-x col-md-6" data-aos="fade-up" data-aos-duration="1000">
                    <img src="/assets/img/infinity-with-dots.png" alt="hero image" class="img-fluid glow">
                </section>

                <section class="hero-body col-lg-5 ">
                    <h6 data-aos="fade-right" data-aos-duration="1000" class="fs-6 ls-8 pop text-uppercase text-lite"> {{heading1}} </h6>
                    <h1 class="display-1 sans text-light"  data-aos="zoom-in-left" data-aos-duration="1000"> {{heading2}} </h1>
                    <p class="pop text-lite text-justify">
                    {{bio}}
                    </p>
                    <div
                        class="hero-btn glow-blue mt-3 d-flex border-ray text-light fs-5 sans align-items-center justify-content-between w-fit">
                        <a :href="heroBtn" class="px-3">GET CONSULT</a>
                        <div class="w-4 border-ray-left center bg-theme-2">
                            <img src="/assets/img/Icons/consult-icon.png" alt="icon">
                        </div>
                    </div>
                </section>
                <section class="hero-image col-lg-5 " data-aos="fade-up" data-aos-duration="1000">
                    <img src="/assets/img/infinity-with-dots.png" alt="hero image" class="img-fluid glow">
                </section>
            </div>
        </section>
    </section>
    `,
    props: ['heading1', 'heading2', 'bio', 'heroBtn']

})

app.component('digital-marketing', {
    template:
        /*html*/
        `
        <section class=" position-relative">
        
        <img src="/assets/img/d2.png" alt="d2" class="position-absolute top-0 start-up img-fluid">
            <section class="container d-flex gap-5 flex-wrap my-5">

                <!-- title -->
                <div class=" pop d-flex flex-column fs-3 text-uppercase p-2">
                    <span class="text-lite">01</span>
                    <span class="text-light">Digital</span>
                    <span class="text-ray">Marketing</span>
                </div>

                <!-- POTS -->
                <div class="pots d-flex flex-wrap gap-3">

                    <div v-for="d in dm" class="dm-pot p-5 d-flex flex-column justify-content-start gap-3"  data-aos="fade-up" data-aos-duration="1000">
                        <h2 class="fs-3 sans text-light"> {{d.title}} </h2>
                        <div class="dash-pot"></div>
                        <p class="pop text-lite">
                        {{d.description}}
                        </p>
                        <div class="dm-divider-l bg-ray-up"></div>
                        <div class="dm-divider-r bg-ray-up"></div>
                        <div class="dm-divider"></div>
                    </div>
                </div>

            </section>
        </section>

    `,
    props: ['dm']
})


app.component('digital-development', {
    template:
        /*html */
        `
    <section>
        <section class="dd container my-5 d-flex gap-5 flex-wrap justify-content-center px-3">

            <!-- POTS -->
            <div class="pots d-flex flex-column gap-3">
                <div class="dd-pot h-fit d-flex"  data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                    <div class="dd-icon p-5">
                        <img src="/assets/icons3/app-development-icon.png" alt="" class="" width="100">
                    </div>
                    <div class="dd-text w-100 d-flex justify-content-center align-items-center">
                        <div class="">
                            <h3 class="fs-3 text-light sans"><span class="text-ray">App</span> Development</h3>
                            <p class="text-lite pop"> {{dd1}} </p>
                        </div>
                    </div>
                    <div class="dd-divider-left bg-ray-up"></div>
                    <div class="dd-divider bg-ray-up"></div>
                </div>
                <div class="dd-pot h-fit d-flex"  data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                    <div class="dd-icon p-5">
                        <img src="/assets/icons3/web-development-icon.png" alt="" class="" width="100">
                    </div>
                    <div class="dd-text w-100 d-flex justify-content-center align-items-center">
                        <div class="p-5 mx-auto">
                            <h3 class="text-light sans"><span class="text-ray">Web</span> Development</h3>
                            <p class="text-lite pop">{{dd2}}</p>
                        </div>
                    </div>
                    <div class="dd-divider-left bg-ray-up"></div>
                    <div class="dd-divider bg-ray-up"></div>
                </div>
                <div class="dd-pot h-fit d-flex"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <div class="dd-icon p-5">
                        <img src="/assets/icons3/ui-ux-design-icon.png" alt="" class="" width="100">
                    </div>
                    <div class="dd-text w-100 d-flex justify-content-center align-items-center">
                        <div class="p-5 mx-auto">
                            <h3 class="text-light sans"><span class="text-ray">UI/UX</span> Design</h3>
                            <p class="text-lite pop">{{dd3}}</p>
                        </div>
                    </div>
                    <div class="dd-divider-left bg-ray-up"></div>
                    <div class="dd-divider bg-ray-up"></div>
                </div>

            </div>

            <!-- title -->
            <div class=" pop d-flex flex-column fs-3 text-uppercase p-2">
                <span class="text-lite">02</span>
                <span class="text-light">Digital</span>
                <span class="text-ray">Development</span>
            </div>


        </section>
    </section>
    `,
    props: ['dd1', 'dd2', 'dd3']
})

app.component('digital-transformation', {
    template:
        /*html */
        `
    <section>
        <section class="container my-5 px-3">

            <!-- title -->
            <div class="my-5 pop d-flex flex-column fs-3 text-uppercase p-2">
                <span class="text-lite">03</span>
                <span class="text-light">Digital</span>
                <span class="text-ray">Transformation</span>
            </div>

            <section class="dt px-3 d-flex">
                <div class="dt-icons d-flex">
                    <div class="dti-active"  @click="curr = !curr">
                        <img src="/assets/img/Icons/digital-business-development-icon-1.png" alt="next">
                    </div>
                    <div class="dti"  @click="curr = !curr">
                        <img src="/assets/img/Icons/digital-business-development-icon-2.png" alt="back" >
                    </div>
                </div>

                <div v-if="curr" class="dt-text d-flex gap-4 flex-column"  data-aos="flip-down" data-aos-duration="1000" >
                    <h2 class="text-light sans fs-3"> Digital Business Development</h2>
                    <div class="dt-dash">  </div>
                    <p class="text-lite"> {{dt1}} <p>
                    <div class="dt-divider bg-ray-down"></div>
                </div>
                <div v-else class="dt-text d-flex gap-4 flex-column"  data-aos="flip-up" data-aos-duration="1000">
                    <h2 class="text-light sans fs-3">WORK IN AI-VR SUSTAINABILITY  </h2>
                    <div class="dt-dash"> </div>
                    <p class="text-lite"> {{dt2}} <p>
                    <div class="dt-divider bg-ray-down"></div>
                </div>

            </section>
        </section>
    </section>
    `,
    props: ['dt1','dt2'],
    data(){
        return{
            curr:true
        }
    }
})

app.component('digital-exc', {
    template:
        /*html */
        `
    <section>
        <section class="digital-exc">
            <section class="container">
                <div class="row justify-content-between px-2 gap-5">
                    <div class="col-lg-5 col-12 de-text text-light d-flex justify-content-center flex-column gap-3">
                        <h1 class="sans display-3"  data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="100">
                            <strong class="text-ray text-uppercase">You Deserve Excellence.</strong>
                            <br>
                            <strong>We live by it.</strong>
                        </h1>
                        <h2 class="fs-2 text-lite pop ls-2 text-uppercase"  data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="100">Our multidiscplinary framework for
                            success
                        </h2>
                    </div>
                    <div class="col-lg-5 col-12 de-icon">
                        <img src="/assets/img/graphics-2.png" alt="graphics-2" class="img-fluid scale-1 glow">
                    </div>
                </div>
            </section>
            <!--
            <img src="/assets/img/Container/you-deserve-excellence-container.png" alt="ds"
                class="img-fluid bg-ds position-absolute top-50 start-0 translate-middle-y"> -->
        </section>
    </section>
    `
})

app.component('vr-section', {
    template:
        /*html */
        `
    <section>
        <section class="vr-section">
            <section class="container">

                <div class="row justify-content-between px-2 gap-5">
                    <div class="col-lg-5 col-12 de-icon">
                        <img src="/assets/img/vr-graphics-3.png" alt="graphics-2" class="img-fluid scale-1">
                    </div>
                    <div class="col-lg-5 col-12 de-text text-light d-flex justify-content-center flex-column gap-2"  data-aos="zoom-in-left" data-aos-duration="1000" data-aos-delay="100">
                        <h1 class="display-3 sans">
                            <strong>Work in <span class="text-ray">AI|VR / Sustainability ?</span></strong>
                        </h1>
                        <h2 class="pop ls-2 fs-6 text-lite text-uppercase"><strong> {{heading}} </strong></h2>
                        <p class="pop text-lite">
                        {{bio}}
                        </p>

                        <div
                            class="hero-btn glow-blue d-flex border-ray text-light fs-5 sans align-items-center justify-content-between w-fit">
                            <a :href="btn" class="px-3">Book a Slot</a>
                            <div class="w-4 border-ray-left center bg-theme-2">
                                <img src="/assets/img/Icons/consult-icon.png" alt="icon">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--
            <img src="/assets/img/Container/vr-container.png" alt="ds"
                class="img-fluid bg-ds position-absolute top-50 start-0 translate-middle-y"> -->
        </section>
    </section>
    `,
    props: ['heading', 'bio', 'btn']
})

app.component('aggreements', {
    template:
        /*html */
        `
    
    <section>
    <section class="my-5 d-flex gap-5 flex-column">
        <section class="container px-3">
            <h2 class="text-light sans position-relative" data-aos="zoom-in-up" data-aos-duration="1000"
                data-aos-delay="100">
                Our
                <span class="text-ray">Aggreements</span>
                <div class="dash"></div>
            </h2>
            <p class="text-lite pop" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, provident!
            </p>
        </section>


        <section class="container my-5">
            <div class="agr d-flex justify-content-center px-3 align-items-center">

                <div id="pot1"
                    class="agr-pot shadow d-flex align-items-center flex-column gap-3 p-3 position-relative">
                    <h1 class="text-light text-center"> OneTime </h1>
                    <h3 class="text-lite text-center text-uppercase fs-6">Receive your re-inforcments</h3>
                    <div class="agr-startup">
                    </div>
                    <div class="agr-list p-3">
                        <h2 class="text-light text-center text-uppercase">START UP</h2>
                        <h6 class="text-lite pop fs-6 mt-5"><i class="bi bi-check2-all px-3"></i>Creative
                            Excution</h6>
                        <h6 class="text-lite pop fs-6 "><i class="bi bi-check2-all px-3"></i>CopyWriting
                            Services </h6>
                        <h6 class="text-lite pop fs-6 "><i class="bi bi-check2-all px-3"></i>Marketing
                            Strategies
                        </h6>
                        <h6 class="text-lite pop fs-6 "><i class="bi bi-check2-all px-3"></i>Logowork and
                            Branding
                        </h6>
                        <h6 class="text-lite pop fs-6 "><i class="bi bi-check2-all px-3"></i>Web & App
                            Development
                        </h6>
                        <div
                            class="agr-btn glow-blue mt-3 d-flex border-ray text-light fs-5 sans align-items-center justify-content-between mx-auto">
                            <a href="" class="px-3 text-center w-100">INQUIRE NOW</a>
                            <div class="w-4 border-ray-left center bg-theme-2">
                                <img src="/assets/img/Icons/consult-icon.png" alt="icon">
                            </div>
                        </div>
                    </div>

                    <!-- borders -->
                    <div class="bg-ray-up agr-divider-left"></div>
                    <div class="bg-ray-up agr-divider-right"></div>
                </div>

                <div id="pot2"
                    class="agr-active agr-pot shadow d-flex align-items-center flex-column gap-3 p-3 position-relative">
                    <h1 class="text-light text-center">6 Months +</h1>
                    <h3 class="text-lite text-center text-uppercase fs-6">Capture Your Opportunities</h3>
                    <div class="agr-grow"></div>
                    <div class="agr-list p-3">
                        <h2 class="text-light text-center text-uppercase">GROW</h2>
                        <h6 class="text-lite pop fs-6  mt-5"><i class="bi bi-check2-all px-3"></i>Startup
                            services</h6>
                        <h6 class="text-lite pop fs-6 "><i class="bi bi-check2-all px-3"></i>Retainer Offering
                        </h6>
                        <h6 class="text-lite pop fs-6 "><i class="bi bi-check2-all px-3"></i>Monthly
                            Intelligence
                        </h6>
                        <h6 class="text-lite pop fs-6 "><i class="bi bi-check2-all px-3"></i>Comunity
                            Intelligence
                        </h6>
                        <h6 class="text-lite pop fs-6 "><i class="bi bi-check2-all px-3"></i>Continuous
                            Development
                        </h6>
                        <div class="agr-btn">
                            <div
                                class="glow-blue mt-3 d-flex border-ray text-light fs-5 sans align-items-center justify-content-between mx-auto">
                                <a href="" class="px-3 text-center w-100">INQUIRE NOW</a>
                                <div class="w-4 border-ray-left center bg-theme-2">
                                    <img src="/assets/img/Icons/consult-icon.png" alt="icon">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- borders -->
                    <div class="bg-ray-up agr-divider-left"></div>
                    <div class="bg-ray-up agr-divider-right"></div>
                </div>

                <div id="pot3"
                    class="agr-pot shadow d-flex align-items-center flex-column gap-3 p-3 position-relative">
                    <h1 class="text-light text-center">One Time</h1>
                    <h3 class="text-lite text-center text-uppercase fs-6">Maximize your gains</h3>
                    <div class="agr-accelerate"> </div>
                    <div class="agr-list p-3">
                        <h2 class="text-light text-center text-uppercase"> Accelerate</h2>
                        <h6 class="text-lite pop fs-6  mt-5"><i class="bi bi-check2-all px-3"></i>Grow Services
                        </h6>
                        <h6 class="text-lite pop fs-6 "><i class="bi bi-check2-all px-3"></i>Biweekly
                            Intelligence</h6>
                        <h6 class="text-lite pop fs-6 "><i class="bi bi-check2-all px-3"></i>Digitale
                            Transformation
                        </h6>
                        <h6 class="text-lite pop fs-6 "><i class="bi bi-check2-all px-3"></i>Infrastructure
                            Development
                        </h6>
                        <h6 class="text-lite pop fs-6 "><i class="bi bi-check2-all px-3"></i>Business
                            Development
                            Roadmap
                        </h6>
                        <div
                            class="agr-btn glow-blue mt-3 d-flex border-ray text-light fs-5 sans align-items-center justify-content-between mx-auto">
                            <a href="" class="px-3 text-center w-100">INQUIRE NOW</a>
                            <div class="w-4 border-ray-left center bg-theme-2">
                                <img src="/assets/img/Icons/consult-icon.png" alt="icon">
                            </div>
                        </div>
                    </div>

                    <!-- borders -->
                    <div class="bg-ray-up agr-divider-left"></div>
                    <div class="bg-ray-up agr-divider-right"></div>
                </div>
            </div>
        </section>
    </section>
</section>
    `,
    props:['agr1','agr2','agr3'],
})

app.component('team-section', {
    template:
        /*html */
        `

    <section>
        <section class="position-relative container">
            <section class="container my-5 px-3">
                <h2 class="text-light sans position-relative"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    Our
                    <span class="text-ray">Team</span>
                    <div class="dash"></div>
                </h2>
                <!-- <p class="text-lite pop">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, provident!</p> -->
            </section>
            <section class="container my-5">
                <div class="d-flex justify-content-evenly align-items-center gap-5 flex-wrap">

                    <div v-for="t in team" class="team-pot"  data-aos="flip-right" data-aos-duration="1000" :data-aos-delay="t.index * 300">
                        <img :src="t.url" :alt="t.name" class="img-fluid">
                        <div class="w-100 d-flex">
                            <div class="dash-yellow w-50"></div>
                            <div class="dash-ray w-50"></div>
                        </div>

                        <div class="team-text d-flex align-items-center gap-3 flex-column p-3">
                            <h1 class="text-yellow sans text-center fs-1"> {{t.name}} </h1>
                            <h4 class="text-ray pop ls-2 text-uppercase fs-6 text-center"> {{t.jobTitle}} </h4>
                            <p class="pop text-lite text-center"> {{t.bio}} </p>
                            <div class="d-flex align-items-center gap-5">
                            <a :href="t.email"><i class="bi bi-envelope fs-1 text-ray"></i></a>
                            <a :href="t.linkedIn"><i class="bi bi-linkedin fs-2 text-ray"></i></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <img src="/assets/img/Container/our-team-back-container.png" alt="img background" class="c3 img-fluid start-0 position-absolute" style="bottom:2rem; z-index: -1;">
        </section>
    </section>

    `,
    props:['team']
})

app.component('contact-section', {
    template:
        /*html */
        `
        <section class="container my-5 px-3 position-relative">
            <h1 class="text-light fs-1 sans my-5 gt-head">Get <span class="text-ray">In Touch</span></h1>
            <div class="contact">
                <section class="w-100 h-fit position-relative">

                    <img src="/assets/img/Container/you-deserve-excellence-container.png" alt=""
                        class="gt-dash img-fluid">
                    <div class="gt-pot gap-3">
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
                            class="shadow w-100 d-flex gap-5 justify-content-start px-5 align-items-center py-2 rounded">
                            <i class="bi bi-geo-alt-fill fs-1 text-ray"></i>
                            <div class="text-light">
                                <h2 class="sans">Visit <span class="text-ray">Us</span></h2>
                                <p class="text-lite pop"> {{profile.address}} </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
                            class="shadow w-100 d-flex gap-5 justify-content-start px-5 align-items-center py-2 rounded">
                            <i class="bi bi-envelope fs-1 text-ray"></i>
                            <div class="text-light">
                                <h2 class="sans">Email <span class="text-ray">Us</span></h2>
                                <p class="text-lite pop">{{profile.email}}</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
                            class="shadow w-100 d-flex gap-5 justify-content-start px-5 align-items-center py-2 rounded">
                            <i class="bi bi-telephone-outbound-fill fs-1 text-ray"></i>
                            <div class="text-light">
                                <h2 class="sans">Call <span class="text-ray">Us</span></h2>
                                <p class="text-lite pop">{{profile.number}}</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700"
                            class="shadow w-100 d-flex gap-5 justify-content-start px-5 align-items-center py-2 rounded">
                            <i class="bi bi-globe fs-1 text-ray"></i>
                            <div class="text-light">
                                <h2 class="sans">Our <span class="text-ray">Support</span></h2>
                                <p class="text-lite pop">{{profile.support}}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="form-box">
                    <div class="p-3 position-relative">
                        <div class="d-flex flex-column justify-content-between gap-4 position-relative">
                            <div class="d-flex gap-4">
                                <input type="text" class="w-50 form-input text-light pop fs-6" placeholder="Name">
                                <input type="text" class="w-50 form-input text-light pop fs-6" placeholder="Email">
                            </div>
                            <div class="d-flex gap-4">
                                <input type="text" class="w-50 form-input text-light pop fs-6" placeholder="Phone">
                                <input type="text" class="w-50 form-input text-light pop fs-6" placeholder="Website">
                            </div>
                            <div class="d-flex">
                                <input type="text" class="w-100 form-input text-light pop fs-6"
                                    placeholder="Computer Consult">
                                <div class="w-4 border-blue-3 center bg-blue-2">
                                    <img src="/assets/img/Icons/consult-icon.png" alt="icon">
                                </div>
                            </div>
                            <div class="">
                                <textarea class="w-100 form-input text-light pop fs-6" placeholder="Comment"></textarea>
                            </div>
                            <div class="d-flex justify-content-center"  data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="100">
                                <button class="w-50 form-submit p-3"><strong
                                        class="text-danger">SUBMIT</strong></button>
                            </div>
                        </div>
                        <div class="form-dash"></div>
                    </div>

                </section>
            </div>
        </section>
    `,
    props:['profile']
})

app.mount('#app')