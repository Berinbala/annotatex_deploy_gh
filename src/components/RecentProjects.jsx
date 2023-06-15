
import React from 'react';
import Soccer from '../assets/soccer-beach.mp4';
import {
  FaGithubSquare,
} from 'react-icons/fa';

const RecentProjects = () => {
  return (
    <div id="recent-projects" className='w-full bg-white py-16 px-4'>
      <h1 className='text-[#1e1b4b] text-4xl text-center font-bold py-2 mb-10'>Recent project</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <video className='w-[500px] flex mx-auto my-4 rounded-lg'  alt='beach-soccer' autoPlay loop muted>
          <source type="video/mp4" src={Soccer}></source>
        </video>
        <div className='flex flex-col justify-center'>
          <p className="text-xl mt-2 font-bold">Project: BURST: A Benchmark for Unifying Object Recognition, Segmentation and Tracking in Video (WACV'23)</p>
          <p className="text-lg mt-2 font-bold">Customer: Deva Ramanan</p>
          <p className="text-lg font-bold">Professor, Robotics Institute, Carnegie Mellon University</p>
          <p className="text-lg mt-2">BURST is a dataset/benchmark for object segmentation in video. It contains a total of 2,914 videos with pixel precise segmentation masks for 16,809 unique object tracks (600,000 per-frame masks) spanning 482 object classes. It is based on the exisiting TAO dataset which contains box-level annotations which we extended to pixel-precise masks.</p>
          <a className="inline-flex items-center" href="https://github.com/Ali2500/BURST-benchmark" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare className='md:mx-0 my-6 mx-auto' size={60} />
          </a>
          <p className="text-lg font-bold"><a href="https://taodataset.org/workshop/cvpr23/index.html" target="_blank" rel="noopener noreferrer">CVPR Workshop on "Tracking and Its Many Guises" Link </a></p>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
