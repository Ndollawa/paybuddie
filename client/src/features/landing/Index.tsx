import React,{useEffect} from 'react';
import { Link,Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useCompanyDetails} from '../dashboard/pages/Settings/settingsConfigSlice';
import Nav from './components/Nav';
import Head from './components/Head';
import Footer from './components/Footer';
import Js from './components/Js';
import MobileNav from './components/MobileNav';
import Search from './components/Search';
import $ from 'jquery';
import pageProps from "../../app/utils/props/pageProps";
import './styles.css';
    
const Home:React.FC<pageProps> = ({pageData}:pageProps) => {

    useEffect(()=>{
        if ($(".preloader").length) {
            $(".preloader").fadeOut();
          }
        
          if ($(".main-menu").length && $(".mobile-nav__container").length) {
            let navContent = document.querySelector(".main-menu__nav")!.innerHTML;
            let mobileNavContainer = document.querySelector(".mobile-nav__container");
            mobileNavContainer!.innerHTML = navContent;
          }
          if ($(".sticky-header__content").length) {
            let navContent = document.querySelector(".main-menu")!.innerHTML;
            let mobileNavContainer = document.querySelector(".sticky-header__content")!;
            mobileNavContainer.innerHTML = navContent;
          }
        
          if ($(".mobile-nav__container .main-menu__list").length) {
            let dropdownAnchor = $(
              ".mobile-nav__container .main-menu__list .dropdown > a"
            );
            dropdownAnchor.each(function () {
              let self = $(this);
              let toggleBtn = document.createElement("BUTTON");
              toggleBtn.setAttribute("aria-label", "dropdown toggler");
              toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
              self.append(function () {
                return toggleBtn;
              });
              self.find("button").on("click", function (e) {
                e.preventDefault();
                let self = $(this);
                self.toggleClass("expanded");
                self.parent().toggleClass("expanded");
                self.parent().parent().children("ul").slideToggle();
              });
            });
          }
        
          if ($(".mobile-nav__toggler").length) {
            $(".mobile-nav__toggler").on("click", function (e) {
              e.preventDefault();
              $(".mobile-nav__wrapper").toggleClass("expanded");
              $("body").toggleClass("locked");
            });
          }
        
          if ($(".search-toggler").length) {
            $(".search-toggler").on("click", function (e) {
              e.preventDefault();
              $(".search-popup").toggleClass("active");
              $(".mobile-nav__wrapper").removeClass("expanded");
              $("body").toggleClass("locked");
            });
          }
          if ($(".mini-cart__toggler").length) {
            $(".mini-cart__toggler").on("click", function (e) {
              e.preventDefault();
              $(".mini-cart").toggleClass("expanded");
              $(".mobile-nav__wrapper").removeClass("expanded");
              $("body").toggleClass("locked");
            });
          }

          
  // window scroll event

  $(window).on("scroll", function () {
    if ($(".stricked-menu").length) {
      var headerScrollPos = 130;
      var stricky = $(".stricked-menu");
      if ($(window).scrollTop()! > headerScrollPos) {
        stricky.addClass("stricky-fixed");
      } else if ($(this).scrollTop()! <= headerScrollPos) {
        stricky.removeClass("stricky-fixed");
      }
    }
    if ($(".scroll-to-top").length) {
      var strickyScrollPos = 100;
      if ($(window).scrollTop()! > strickyScrollPos) {
        $(".scroll-to-top").fadeIn(500);
      } else if ($(this).scrollTop()! <= strickyScrollPos) {
        $(".scroll-to-top").fadeOut(500);
      }
    }
  });
  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab")!);

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }

  if ($(".accrodion-grp").length) {
    var accrodionGrp = $(".accrodion-grp")!;
    accrodionGrp.each(function () {
      var accrodionName = $(this).data("grp-name")!;
      var Self = $(this);
      var accordion = Self.find(".accrodion");
      Self.addClass(accrodionName);
      Self.find(".accrodion .accrodion-content").hide();
      Self.find(".accrodion.active").find(".accrodion-content").show();
      accordion.each(function () {
        $(this)
          .find(".accrodion-title")
          .on("click", function () {
            if ($(this).parent().hasClass("active") === false) {
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .removeClass("active");
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .find(".accrodion-content")
                .slideUp();
              $(this).parent().addClass("active");
              $(this).parent().find(".accrodion-content").slideDown();
            }
          });
      });
    });
  }

   // custom coursor
   if ($(".custom-cursor").length) {
    var cursor = document.querySelector(".custom-cursor__cursor")! as HTMLElement;
    var cursorinner = document.querySelector(".custom-cursor__cursor-two")! as HTMLElement;
    var a = document.querySelectorAll("a")!;

    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });

    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursorinner.style.left = x + "px";
      cursorinner.style.top = y + "px";
    });

    document.addEventListener("mousedown", function () {
      cursor.classList.add("click");
      cursorinner.classList.add("custom-cursor__innerhover");
    });

    document.addEventListener("mouseup", function () {
      cursor.classList.remove("click");
      cursorinner.classList.remove("custom-cursor__innerhover");
    });

    a.forEach((item) => {
      item.addEventListener("mouseover", () => {
        cursor.classList.add("custom-cursor__hover");
      });
      item.addEventListener("mouseleave", () => {
        cursor.classList.remove("custom-cursor__hover");
      });
    });
  }

    }, [])
    const {favicon}  = useSelector(useCompanyDetails); 
  return (
    <>
    <Head pageData={pageData}/>
 
    <div className="custom-cursor">

    <div className="custom-cursor__cursor"></div>
    <div className="custom-cursor__cursor-two"></div>

    <div className="preloader">
        <div className="preloader__image" style={{backgroundImage:process.env.REACT_APP_UPLOAD_URL+"/settings/"+favicon}}></div>
    </div>
    {/* // <!-- /.preloader --> */}
    <div className="page-wrapper">
       
        <Nav/>
        {/* <!-- /.stricky-header --> */}
      
  
            <Outlet/>

      
        <Footer />
        {/* <!-- /.bottom-footer --> */}

    </div>
    {/* <!-- /.page-wrapper --> */}

        <MobileNav/>
    
    {/* <!-- /.mobile-nav__wrapper --> */}

 
        <Search/>
    
    {/* <!-- /.search-popup --> */}

    <Link to="#" data-target="html" className="scroll-to-target scroll-to-top"><i className="fa fa-angle-up"></i></Link>
        </div>

        <Js/>
    </>
  )
}

export default React.memo(Home)