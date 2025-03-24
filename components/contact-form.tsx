"use client"

import type React from "react"

import { useState, useReducer } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, Shield, Code, AlertCircle, CheckCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { submitContactForm } from "@/lib/actions"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"

const initialState = {
  errors: {},
  success: false,
  message: "",
}

function formReducer(state: typeof initialState, action: any) {
  switch (action.type) {
    case "SUBMIT_SUCCESS":
      return { ...state, success: true, message: action.payload, errors: {} }
    case "SUBMIT_FAILURE":
      return { ...state, success: false, errors: action.payload }
    case "RESET":
      return initialState
    default:
      return state
  }
}

export default function ContactForm() {
  const [serviceType, setServiceType] = useState("")
  const [formState, dispatch] = useReducer(formReducer, initialState)
  const { toast } = useToast()
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Show toast when form submission is successful
  if (formState.success && formState.message && !formSubmitted) {
    toast({
      title: "Success!",
      description: formState.message,
      variant: "default",
    })
    setFormSubmitted(true)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent default form submission
    setFormSubmitted(false)
    const formData = new FormData(e.currentTarget)

    try {
      const response = await submitContactForm(formData)
      dispatch({ type: "SUBMIT_SUCCESS", payload: response.message })
    } catch (error: any) {
      dispatch({ type: "SUBMIT_FAILURE", payload: error.errors || { _form: "An unexpected error occurred." } })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form-level error message */}
      {formState.errors?._form && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {Array.isArray(formState.errors._form)
              ? formState.errors._form.map((error, i) => <div key={i}>{error}</div>)
              : formState.errors._form}
          </AlertDescription>
        </Alert>
      )}

      {/* Success message */}
      {formState.success && (
        <Alert className="bg-green-500/10 text-green-500 border-green-500/20">
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your message has been sent successfully to ashobal@sinfosecurity.com. We'll get back to you soon.
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="name" className="flex items-center justify-between">
          Name
          {formState.errors?.name && (
            <span className="text-destructive text-xs font-normal">{formState.errors.name}</span>
          )}
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          className={formState.errors?.name ? "border-destructive" : ""}
          disabled={formState.success}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className="flex items-center justify-between">
          Company
          {formState.errors?.company && (
            <span className="text-destructive text-xs font-normal">{formState.errors.company}</span>
          )}
        </Label>
        <Input
          id="company"
          name="company"
          placeholder="Your company"
          className={formState.errors?.company ? "border-destructive" : ""}
          disabled={formState.success}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center justify-between">
          Email
          {formState.errors?.email && (
            <span className="text-destructive text-xs font-normal">{formState.errors.email}</span>
          )}
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          className={formState.errors?.email ? "border-destructive" : ""}
          disabled={formState.success}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="serviceType" className="flex items-center justify-between">
          Service Type
          {formState.errors?.serviceType && (
            <span className="text-destructive text-xs font-normal">{formState.errors.serviceType}</span>
          )}
        </Label>
        <Select value={serviceType} onValueChange={(value) => setServiceType(value)} disabled={formState.success}>
          <SelectTrigger id="serviceType" className={formState.errors?.serviceType ? "border-destructive" : ""}>
            <SelectValue placeholder="Select service type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="security">Security Solutions</SelectItem>
            <SelectItem value="development">Full-Stack Development</SelectItem>
            <SelectItem value="both">Combined Services</SelectItem>
          </SelectContent>
        </Select>
        <input type="hidden" name="serviceType" value={serviceType} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="flex items-center justify-between">
          Project Requirements
          {formState.errors?.message && (
            <span className="text-destructive text-xs font-normal">{formState.errors.message}</span>
          )}
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Describe your project needs"
          rows={5}
          className={formState.errors?.message ? "border-destructive" : ""}
          disabled={formState.success}
        />
      </div>

      <div className="flex items-center gap-2 mt-2">
        <div className="h-5 w-5 border border-input rounded flex items-center justify-center">
          <input type="checkbox" id="recaptcha" required className="sr-only peer" disabled={formState.success} />
          <div className="opacity-0 peer-checked:opacity-100 text-primary">✓</div>
        </div>
        <Label htmlFor="recaptcha" className="text-sm text-muted-foreground">
          I'm not a robot
        </Label>
      </div>

      <SubmitButton disabled={formState.success} />
    </form>
  )
}

function SubmitButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full" disabled={pending || disabled}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <div className="flex items-center">
            <Shield className="mr-1 h-4 w-4" />
            <Code className="mr-2 h-4 w-4" />
            Request Consultation
          </div>
        </>
      )}
    </Button>
  )
}