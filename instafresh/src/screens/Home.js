import React from 'react'
import Navabar from '../components/Navabar'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Home() {
    return (
        <div>
            <div>
                <Navabar />
            </div>
            <div>
                <Card/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
