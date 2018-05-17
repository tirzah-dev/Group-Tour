import React, { Component } from 'react';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

export default class ImageUploader extends Component {
	render() {
		return (
			<ImagesUploader
				url="http://localhost:8000/traveler"
				optimisticPreviews
				multiple={false}
				onLoadEnd={(err) => {
					if (err) {
						console.error(err);
					}
				}}
				label="Upload a picture"
				/>
		);
	}
}
