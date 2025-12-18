import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = ({ data }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    return ( <
        section id = "about"
        className = "py-20"
        style = {
            { backgroundColor: '#FAEDCD' } } >
        <
        div className = "container mx-auto px-4 sm:px-6 lg:px-8" >
        <
        motion.div ref = { ref }
        initial = {
            { opacity: 0, y: 50 } }
        animate = { isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 } }
        transition = {
            { duration: 0.8 } }
        className = "max-w-4xl mx-auto" >
        <
        div className = "text-center mb-12" >
        <
        motion.h2 className = "text-3xl sm:text-4xl font-bold text-foreground mb-4"
        initial = {
            { opacity: 0, y: 20 } }
        animate = { isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 } }
        transition = {
            { duration: 0.6, delay: 0.2 } } >
        About Me <
        /motion.h2> <
        motion.div className = "w-20 h-1 bg-accent mx-auto"
        initial = {
            { scaleX: 0 } }
        animate = { isInView ? { scaleX: 1 } : { scaleX: 0 } }
        transition = {
            { duration: 0.6, delay: 0.4 } }
        /> <
        /div>

        <
        div className = "grid lg:grid-cols-2 gap-12 items-center" > { /* About Text */ } <
        motion.div className = "space-y-6"
        initial = {
            { opacity: 0, x: -50 } }
        animate = { isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 } }
        transition = {
            { duration: 0.8, delay: 0.3 } } >
        <
        p className = "text-foreground/80 text-lg leading-relaxed" > { data.description } <
        /p>

        <
        p className = "text-foreground/70 leading-relaxed" > { data.detailedDescription } <
        /p>

        { /* Quick Stats */ } <
        div className = "grid grid-cols-2 gap-6 pt-6" > {
            data.stats.map((stat, index) => ( <
                motion.div key = { stat.label }
                className = "text-center"
                initial = {
                    { opacity: 0, scale: 0.8 } }
                animate = { isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 } }
                transition = {
                    { duration: 0.6, delay: 0.5 + index * 0.1 } } >
                <
                div className = "text-2xl font-bold text-accent mb-2" > { stat.value } <
                /div> <
                div className = "text-foreground/60 text-sm uppercase tracking-wide" > { stat.label } <
                /div> <
                /motion.div>
            ))
        } <
        /div> <
        /motion.div>

        { /* Image/Visual Placeholder */ } <
        motion.div className = "relative"
        initial = {
            { opacity: 0, x: 50 } }
        animate = { isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 } }
        transition = {
            { duration: 0.8, delay: 0.5 } } >
        <
        div className = "aspect-square bg-background rounded-2xl border border-border overflow-hidden" >
        <
        div className = "h-full flex items-center justify-center text-foreground/40" >
        <
        div className = "text-center" >
        <
        div className = "w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4" >
        <
        span className = "text-lg font-semibold text-accent" > 💻 < /span> <
        /div> <
        p className = "text-sm" > About Image < /p> <
        p className = "text-xs" > Placeholder < /p> <
        /div> <
        /div> <
        /div>

        { /* Decorative Elements */ } <
        motion.div className = "absolute -top-6 -right-6 w-24 h-24 bg-accent/5 rounded-full"
        animate = {
            { rotate: 360 } }
        transition = {
            { duration: 20, repeat: Infinity, ease: "linear" } }
        /> <
        motion.div className = "absolute -bottom-6 -left-6 w-20 h-20 bg-accent/10 rounded-2xl"
        animate = {
            { rotate: -360 } }
        transition = {
            { duration: 15, repeat: Infinity, ease: "linear" } }
        /> <
        /motion.div> <
        /div>

        { /* Interests */ } <
        motion.div className = "mt-16"
        initial = {
            { opacity: 0, y: 30 } }
        animate = { isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 } }
        transition = {
            { duration: 0.8, delay: 0.7 } } >
        <
        h3 className = "text-xl font-semibold text-foreground mb-6 text-center" >
        Interests & Hobbies <
        /h3> <
        div className = "flex flex-wrap justify-center gap-3" > {
            data.interests.map((interest, index) => ( <
                motion.span key = { interest }
                className = "px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-all duration-200 cursor-default"
                initial = {
                    { opacity: 0, scale: 0.8 } }
                animate = { isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 } }
                transition = {
                    { duration: 0.4, delay: 0.8 + index * 0.1 } }
                whileHover = {
                    { scale: 1.05 } } >
                { interest } <
                /motion.span>
            ))
        } <
        /div> <
        /motion.div> <
        /motion.div> <
        /div> <
        /section>
    );
};

export default About;