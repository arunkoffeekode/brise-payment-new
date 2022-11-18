import React from 'react'
import { Link } from "react-router-dom";
import useMetaMask from "../wallet/hook";
import swap1 from "../img/logoicon.png";
import swap2 from "../img/meta.png";
import swap3 from "../img/Coinhub.png";
import swap4 from "../img/secure-pay.png";

function BrisePay() {
    const {
        connect,
        disconnect,
        isActive,
        account,
        walletModal,
        handleWalletModal,
    } = useMetaMask();

    return (
        <div>
            <div className='pay-brise'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12 col-xl-12'>
                            <div className='brise-payble-section'>
                                <div className='row'>
                                    <div className='col-lg-7 col-md-7 col-sm-12 col-xl-7'>
                                        <div className='pay-details'>
                                            <p>Pay to</p>
                                            <h2>Better Buys - BRISE (BRC 20)</h2>
                                            <div className='ref-id'>Reference Id: <span>#1046536132</span></div>
                                        </div>
                                    </div>
                                    <div className='col-lg-5 col-md-5 col-sm-12 col-xl-5'>
                                        <div className='pay-amt'>
                                            <div className='pay-title'>Payable Amount </div>
                                            <div className='pay'>USD 30.09</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xl-6'>
                            <div className='brise-chain'>
                                <h2>Use following wallet to access<br /> <span>Brise</span> Chain</h2>
                                <ul>
                                    <li>
                                        <button type='button' className='brise-meta'><img src={swap1}></img>Bitgert Wallet </button>
                                    </li>
                                    <li>
                                        <button type='button' className='brise-meta'><img src={swap2}></img>metamask wallet </button>
                                    </li>
                                    <li>
                                        <button type='button' className='brise-meta'><img src={swap3}></img>Coinhub Wallet</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 col-xl-6'>
                            <div className='secure-payment'>
                                <h3>Secure Payment</h3>
                                <div className='pay-box'>
                                    <p>Pay with</p>
                                    <div className='label-box'>
                                        <div className='label-first'>
                                            <h2>38375208</h2>
                                        </div>
                                        <div className='label-second'>
                                            <button type='button' className='pay-btn'><img src={swap1}></img>BRISE</button>
                                        </div>
                                    </div>
                                    <div className='ruppes'>$30.09</div>
                                </div>
                                <div className='total-brise'>1 Brise = 0.0000007841 USD</div>
                                <div className='wallte-connect'>
                                    <button type='button' className='connet' onClick={() => {
                                        handleWalletModal(true);
                                    }}>
                                        Connect Wallet
                                    </button>
                                </div>
                                <div className='sec-icon-sym'>
                                    <div className='icon-text'><img src={swap4}></img>Secure Payment</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrisePay