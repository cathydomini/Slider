import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Slider from './components/Slider';

Enzyme.configure({ adapter: new Adapter() })

const ImageData = [
  {
    id:1,
    image:
      "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-1.2.1",
  },
  {
    id:2,
    image:
      "https://images.unsplash.com/photo-1591348122449-02525d70379b?ixlib=rb-1.2.1",
  },
  {
    id:3,
    image:
      "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1",
  },
  {
    id:4,
    image:
      "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-1.2.1",
  },
];

it('render slider component', () =>{  
  const wrapper = shallow(<Slider slides ={ImageData} />);
  expect(wrapper.find("src"));
});