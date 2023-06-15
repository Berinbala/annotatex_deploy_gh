import React from 'react'
import ImageSegment from '../assets/AVA_2.gif'
import BoundBox from '../assets/bounding-box.gif'

const Annotation = () => {
    return (
        <div id='annotation' className='w-full bg-[#fbbf24] py-16 px-4'>
            <section className='max-w-[1240px] mx-auto my-10 flex flex-col justify-center'>
                <h2 className='md:text-6xl mx-auto sm:text-3xl text-2xl font-bold py-2 text-[#1e1b4b]'>Image annotation techniques</h2>
                <p className='m-0 mt-3'>Image annotation involves the process of labeling and annotating objects, regions, or features within an image to provide contextual information. It typically includes techniques such as bounding box annotation, semantic segmentation, polygon annotation, and landmark annotation. Annotators carefully outline and mark the desired elements in the image, enabling machine learning algorithms to recognize and understand them. </p>
            </section>
            <div className='max-w-[1240px] mx-auto my-10 grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4 rounded-lg' src={ImageSegment} alt='image-segmented-group' />
                    <div className='flex flex-col align-text-top'>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#1e1b4b]'>Image segmentation</h1>
                        <p>
                        Image segmentation is a fundamental task in computer vision that involves dividing an image into meaningful and distinct regions or segments. Unlike bounding boxes, which provide a rectangular boundary around objects, image segmentation aims to assign a specific label or class to every pixel within an image.
                        </p>
                    </div>
            </div>
            <div className='max-w-[1240px] mx-auto my-10 grid md:grid-cols-2'>
                    <div className='flex flex-col align-text-top'>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#1e1b4b]'>Bounding Box</h1>
                        <p>
                        Bounding boxes provide crucial information for algorithms to identify, analyze, and manipulate objects within a given scene, enabling machines to understand and interact with visual data more effectively. By encapsulating objects within a bounding box, computer vision systems can extract valuable features and make accurate predictions and decisions based on the detected objects' spatial information. By segmenting an image, it becomes possible to extract valuable information, such as object boundaries, shapes, textures, and spatial contexts, which can be utilized for further analysis, decision-making, or visual understanding tasks.
                        </p>
                    </div>
                    <img className='w-[500px] mx-auto my-4 rounded-lg' src={BoundBox} alt='bounding-box-traffic' />
            </div>
        </div>
    )
}

export default Annotation