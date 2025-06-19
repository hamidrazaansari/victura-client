import React from 'react'
import { Modal } from 'react-bootstrap'
import {
    FacebookShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    FacebookIcon,
    WhatsappIcon,
    TwitterIcon,
    TelegramShareButton,
    TelegramIcon,
    PinterestShareButton,
    PinterestIcon,
    EmailShareButton,
    EmailIcon,
} from "react-share";
import { toast, ToastContainer } from 'react-toastify';

function ShereModal({ handleClose, show, ProductTitle }) {
    const shareUrl = window.location.href;
    const title = "Check this out!";

    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            toast.success("Link copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    };

    return (
        <div>
            <ToastContainer/>
            <Modal show={show} onHide={handleClose}
                dialogClassName="modal-dialog-centered"
                className='custome'
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {ProductTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <p style={{ fontFamily: "inter", fontSize: "15px" }}>Share this link via</p>

                    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", justifyContent: "center" }}>
                        <WhatsappShareButton url={shareUrl} title={title}>
                            <WhatsappIcon size={40} round />
                        </WhatsappShareButton>

                        <FacebookShareButton url={shareUrl} quote={title}>
                            <FacebookIcon size={40} round />
                        </FacebookShareButton>

                        <TwitterShareButton url={shareUrl} title={title}>
                            <TwitterIcon size={40} round />
                        </TwitterShareButton>

                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                                alt="Instagram"
                                width={40}
                                height={40}
                            />
                        </a>

                        <TelegramShareButton url={shareUrl} quote={title}>
                            <TelegramIcon size={40} round />
                        </TelegramShareButton>

                        <EmailShareButton url={shareUrl} quote={title}>
                            <EmailIcon size={40} round />
                        </EmailShareButton>

                        <PinterestShareButton url={shareUrl} quote={title}>
                            <PinterestIcon size={40} round />
                        </PinterestShareButton>
                    </div>

                    <p style={{ fontFamily: "inter", fontSize: "15px", marginTop: "20px" }}>or copy link</p>

                    <div className="d-flex mb-3">
                        <input type="text" className='linkInput' value={shareUrl} readOnly />
                        <button className='copy' onClick={handleCopy}>Copy</button>
                    </div>

                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ShereModal;
