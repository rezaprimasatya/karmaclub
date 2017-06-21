var DrawCanvas = function () {
    function t(t, e, i, o, r) {
        this.width = e, this.height = i, this.target = t, this.offset = {top: o, bottom: r}, this.draw()
    }

    return t.prototype.draw = function () {
        var t = this.target.getContext("2d"), e = this.width, i = this.height;
        t.canvas.width = e + 2, t.canvas.height = i + 2, t.clearRect(0, 0, t.canvas.width, t.canvas.height), --i, t.lineWidth = 2, t.strokeStyle = "white", t.moveTo(0, 1), t.lineTo(e / 2 - this.offset.top / 2, 1), t.moveTo(e / 2 + this.offset.top / 2, 1), t.lineTo(e, 1), t.lineTo(e, i), t.lineTo(e / 2 + this.offset.bottom / 2, i), t.moveTo(0, 1), t.lineTo(0, i), t.lineTo(e / 2 - this.offset.bottom / 2, i), t.stroke()
    }, t
}(), CKarma = function () {
    function t() {
        this.topSliderCanvas = [], this.bottomSliderCanvas = [], this.$topSlider = $(".top__slider"), this.$bottomSlider = $(".bottom__slider .slide__content"), this.$benefitSlider = $(".slider__benefits--owl"), this.$benefitSliderRtl = $(".slider__benefits--rtl"), this.$gallerySlider = $(".group__gallery"), this.init()
    }

    return t.prototype.init = function () {
        var t = this;
        this.initScrollReveal(), this.initSliders(), transformicons.add(".tcon"), $(".selectpicker").select2({minimumResultsForSearch: 1 / 0}), this.initGallery(), this.showMoreInit(), this.initNewsletter(), this.initContactForm(), this.initHoverEffects(), this.initNavigation(), $(window).resize(function () {
            t.updateCanvas()
        })
    }, t.prototype.initGallery = function () {
        var t = ".gallery__item";
        $(t).hover(function (e) {
            $(e.currentTarget).addClass("active"), $(t).not(".active").addClass("inactive")
        }, function (e) {
            $(e.currentTarget).removeClass("active"), $(t + ".inactive").removeClass("inactive")
        }), $(".gallery__item a").venobox()
    }, t.prototype.showMoreInit = function () {
        $(".show__more").click(function (t) {
            $(".slider__benefits .ccm-layout-column-wrapper:hidden").fadeIn().css("display", "inline-block"), $(t.currentTarget).fadeOut()
            $("#benefits-blocks .ccm-layout-column-wrapper").each(function () {
                var max_h = [];
                $(this).children('.ccm-layout-column').each(function () {
                    max_h.push($(this).height());
                })
                var max_val = 0;
                max_val = findmax(max_h)
                $(this).children('.ccm-layout-column').each(function () {
                    $(this).children('.ccm-layout-column-inner').css('min-height', max_val + 'px')
                });
            })
            $("#benefits-blocks .ccm-layout-column-wrapper").each(function () {
                var check = $(this).children('.ccm-layout-column').children('.ccm-layout-column-inner').children('picture').length;
                if (check == 2) {
                    $(this).children('.ccm-layout-column').eq(2).hide()
                } else if (check == 1) { 
                    $(this).children('.ccm-layout-column').eq(1).hide()
                    $(this).children('.ccm-layout-column').eq(2).hide()
                }
            })
        })
    }, t.prototype.updateCanvas = function () {
        var t = this;
        setTimeout(function () {
            t.topSliderCanvas.forEach(function (t) {
                var e = $(".slide__border");
                t.width = e.width(), t.height = e.height(), t.draw()
            }), t.bottomSliderCanvas.forEach(function (t, e) {
                var i = $(".bottom__slider .owl-item:eq(" + e + ") .quote__border");
                t.width = i.width(), t.height = i.height(), t.draw()
            })
        }, 200)
    }, t.prototype.initCanvas = function () {
        var t = this, e = document.querySelectorAll(".slide__border canvas");
        for (var i in e)"object" == typeof e[i] && this.topSliderCanvas.push(new DrawCanvas(e[i], $(".slide__border").width(), $(".slide__border").height(), 0, 220));
        this.$bottomSlider.on("initialized.owl.carousel", function (e) {
            var i = document.querySelectorAll(".quote__border canvas");
            for (var o in i)"object" == typeof i[o] && t.bottomSliderCanvas.push(new DrawCanvas(i[o], $(".column:eq(" + o + ") .quote__border").width(), $(".column:eq(" + o + ") .quote__border").height(), 80, 220));
            var r = e.currentTarget;
            $(r).find(".owl-item.active").filter(function (t, e) {
                return t % 3 == 1
            }).addClass("center")
        })
    }, t.prototype.initSliders = function () {
        this.initCanvas(), this.$topSlider.owlCarousel({items: 1, mouseDrag: !1, touchDrag: !1, autoplay: !0, animateIn: "fadeIn", animateOut: "fadeOut"}), this.$benefitSliderRtl.owlCarousel({items: 4, mouseDrag: !1, touchDrag: !1, rtl: !0, autoplay: !0, loop: !0, responsive: {1290: {items: 4}, 992: {items: 3}, 768: {items: 2}, 0: {items: 1}}}), this.$benefitSlider.owlCarousel({items: 4, mouseDrag: !1, touchDrag: !1, autoplay: !0, loop: !0, responsive: {1290: {items: 4}, 992: {items: 3}, 768: {items: 2}, 0: {items: 1}}}), this.$gallerySlider.owlCarousel({items: 6, autoplay: !0, loop: !0, responsive: {1290: {items: 6}, 992: {items: 5}, 768: {items: 4}, 480: {items: 2}, 0: {items: 1}}}), this.$bottomSlider.owlCarousel({mouseDrag: !1, touchDrag: !1, autoplay: !0, smartSpeed: 500, responsive: {0: {items: 1}, 768: {items: 2}, 992: {items: 3}}}), this.$bottomSlider.on("changed.owl.carousel", function () {
            setTimeout(function () {
                var t = $(".bottom__slider");
                $(t).find(".center").removeClass("center"), $(t).find(".owl-item.active").filter(function (t, e) {
                    return t % 2 == 1
                }).addClass("center")
            }, 100)
        })
    }, t.prototype.initHoverEffects = function () {
        $("a.animate--bottom").each(function (t, e) {
            var i = $(e), o = i.html(), r = "<span>" + o + "</span><span>" + o + "</span>";
            i.html(r)
        })
    }, t.prototype.initScrollReveal = function () {
        window.sr = ScrollReveal({opacity: 0, scale: 1, distance: "50px", viewFactor: .1}), sr.reveal(".left-animate", {origin: "left"}), sr.reveal(".right-animate", {origin: "right"}), sr.reveal(".animate-opacity", {origin: "bottom", opacity: 0, distance: "0px"})
    }, t.prototype.initNavigation = function () {
        $("button.open-rwd").click(function () {
            $("div.menu__wrapper").toggleClass("active")
        })
    }, t.prototype.initNewsletter = function () {
        var t = $("#newsletter");
        t && t.validate({errorPlacement: function (t, e) {
        }, rules: {first_name: {minlength: 3, required: !0}, last_name: {minlength: 3, required: !0}, email: {required: !0, email: !0}}})
    }, t.prototype.initContactForm = function () {
        var t = $("#contact_form");
        t && t.validate({errorPlacement: function (t, e) {
        }, rules: {first_name: {minlength: 3, required: !0}, last_name: {minlength: 3, required: !0}, email: {required: !0, email: !0}, phone: {required: !0, number: !0}, subject: {minlength: 3, required: !0}, message: {required: !0}}})
    }, t
}();
!function () {
    new CKarma
}();