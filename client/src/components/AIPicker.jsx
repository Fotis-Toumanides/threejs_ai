import React from 'react';
import CustomButton from './CustomButton';


const AIPicker = ({ prompt, setPrompt, generatinImg, handleSubmit }) => {
    return (
        <div className='aipicker-container'>
            <textarea
                classname="aipicker-textarea"
                placeholder='Ask AI...'
                id=""
                value={prompt}
                cols="30"
                rows={5}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <div className="flex flex-wrap gap-3">
                {generatinImg ? (
                    <CustomButton
                        type="outline"
                        title="Asking Ai..."
                        customStyles="text-xs"
                    />
                ) : (
                    <>
                        <CustomButton
                            type="outline"
                            title="AI Logo"
                            handleClick={() => handleSubmit("logo")}
                            customStyles="text-xs"
                        />
                        <CustomButton
                            type="filled"
                            title="AI Full"
                            handleClick={() => handleSubmit("full")}
                            customStyles="text-xs"
                        />
                    </>
                )}
            </div>
        </div>
    )
}

export default AIPicker