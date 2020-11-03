import React, { useState, useCallback } from 'react'
import styles from './GalleryContent.module.scss'
import Gallery from 'react-photo-gallery'
import { photos } from './photos'
import Carousel, { Modal, ModalGateway } from 'react-images'

const GalleryContent = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <section className={styles.Gallery}>
            <header>
                <h1>Preverance Hotel School in pictures</h1>
            </header>
            <main>
                <Gallery photos={photos} onClick={openLightbox} direction={"column"} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </main>
        </section>
    )
}

export default GalleryContent
