import { useEffect, useState, useRef } from 'react';


export  default function useNearScreen ({ distance = '50px', externalRef } ={}) {
    const [isNearScreen, setshow] = useState(false);
    const fromRef = useRef();

    useEffect(function(){
        let observer

        const element = externalRef ? externalRef.current : fromRef.current

        const onChange = (entries, observer) =>{
            const el = entries[0]
            if (el.isIntersecting){
                setshow(true)
                observer.disconnect()
            }
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
            ? IntersectionObserver
            : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            })
    
            element && observer.observe(element)
        })
        
        return () => observer && observer.disconnect()
    })

    return {isNearScreen, fromRef}
}