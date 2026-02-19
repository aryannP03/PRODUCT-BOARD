'use client'
import React from 'react'
import { Controller } from 'react-hook-form'

function Input( {config={}, control}) {

    const { name, label, rules, placeholder, className = "", labelclassName = "" } = config
    return (
        <Controller 
        name = {name}
        control = {control}
        rules = {rules}
        render= {({ field, fieldState }) => (

            <div className={`mb-4 text-left`}>
                <label className={`block text-sm font-bold mb-1 ${labelclassName}`}>
                {label}
                </label>

                <input
                {...field}
                type="text"
                value={field.value ?? ""}
                placeholder={placeholder}
                className={className}
                />

                {fieldState.error && (
                <p className="text-red-500 text-xs mt-1">
                    {fieldState.error.message}
                </p>
                )}
            </div>
        )}
        />

    )
}

export default Input
