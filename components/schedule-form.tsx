"use client";

import { useState, useMemo } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Clock,
  User,
  Building2,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";

const STEPS = [
  { label: "Service", icon: Briefcase },
  { label: "Industry", icon: Building2 },
  { label: "Date & Time", icon: Calendar },
  { label: "Your Details", icon: User },
] as const;

const TIME_SLOTS = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export function ScheduleForm() {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const today = new Date();
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());

  const calendarDays = useMemo(() => {
    const daysInMonth = getDaysInMonth(calYear, calMonth);
    const firstDay = getFirstDayOfMonth(calYear, calMonth);
    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
    return days;
  }, [calYear, calMonth]);

  const canGoNext = () => {
    if (step === 0) return selectedService !== null;
    if (step === 1) return selectedIndustry !== null;
    if (step === 2) return selectedDate !== null && selectedTime !== null;
    if (step === 3) return formData.name && formData.email;
    return false;
  };

  const handleSubmit = () => {
    // TODO: Connect to backend before launch — send form data to API route, email service, or CRM
    // Example: await fetch("/api/schedule", { method: "POST", body: JSON.stringify({ selectedService, selectedIndustry, selectedDate, selectedTime, ...formData }) })
    setSubmitted(true);
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(calYear, calMonth, day);
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) return true;
    if (
      calYear < today.getFullYear() ||
      (calYear === today.getFullYear() && calMonth < today.getMonth()) ||
      (calYear === today.getFullYear() && calMonth === today.getMonth() && day <= today.getDate())
    ) {
      return true;
    }
    return false;
  };

  const isDateSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === calMonth &&
      selectedDate.getFullYear() === calYear
    );
  };

  const prevMonth = () => {
    if (calMonth === 0) {
      setCalMonth(11);
      setCalYear(calYear - 1);
    } else {
      setCalMonth(calMonth - 1);
    }
  };

  const nextMonth = () => {
    if (calMonth === 11) {
      setCalMonth(0);
      setCalYear(calYear + 1);
    } else {
      setCalMonth(calMonth + 1);
    }
  };

  const isPrevDisabled =
    calYear === today.getFullYear() && calMonth === today.getMonth();

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-brand-teal/10">
          <CheckCircle2 className="size-10 text-brand-teal" />
        </div>
        <h3 className="mt-6 text-2xl font-bold tracking-tight">
          Call Scheduled!
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
          We&apos;ve received your request. Our team will send you a calendar
          invite at <span className="font-medium text-foreground">{formData.email}</span> shortly.
        </p>
        <div className="mt-8 rounded-xl border border-border/50 bg-muted/30 px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Briefcase className="size-4 text-brand-coral" />
              <span>{services.find((s) => s.slug === selectedService)?.title}</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-brand-coral" />
              <span>
                {selectedDate?.toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-brand-coral" />
              <span>{selectedTime}</span>
            </div>
          </div>
        </div>
        <Button
          className="mt-8"
          variant="outline"
          onClick={() => {
            setStep(0);
            setSelectedService(null);
            setSelectedIndustry(null);
            setSelectedDate(null);
            setSelectedTime(null);
            setFormData({ name: "", email: "", company: "", phone: "", message: "" });
            setSubmitted(false);
          }}
        >
          Schedule Another Call
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="mb-10 flex items-center justify-center gap-2 sm:gap-3">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const isActive = i === step;
          const isDone = i < step;
          return (
            <div key={s.label} className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => i < step && setStep(i)}
                disabled={i > step}
                className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition-all sm:px-4 sm:text-sm ${
                  isActive
                    ? "bg-brand-coral text-white"
                    : isDone
                      ? "bg-brand-teal/10 text-brand-teal"
                      : "bg-muted text-muted-foreground"
                } ${i <= step ? "cursor-pointer" : "cursor-not-allowed opacity-60"}`}
              >
                {isDone ? (
                  <CheckCircle2 className="size-4" />
                ) : (
                  <Icon className="size-4" />
                )}
                <span className="hidden sm:inline">{s.label}</span>
              </button>
              {i < STEPS.length - 1 && (
                <div
                  className={`h-px w-6 sm:w-10 ${isDone ? "bg-brand-teal/40" : "bg-border"}`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Step content */}
      <div className="min-h-[400px]">
        {/* Step 1: Select Service */}
        {step === 0 && (
          <div className="animate-fade-up">
            <h3 className="text-center text-xl font-bold tracking-tight sm:text-2xl">
              What can we help you with?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-center text-sm text-muted-foreground">
              Select the service you&apos;re interested in discussing.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                const isSelected = selectedService === service.slug;
                return (
                  <button
                    key={service.slug}
                    onClick={() => setSelectedService(service.slug)}
                    className={`group flex items-start gap-4 rounded-xl border-2 px-5 py-4 text-left transition-all duration-200 ${
                      isSelected
                        ? "border-brand-coral bg-brand-coral/5 shadow-sm"
                        : "border-border/50 bg-card hover:border-brand-coral/30 hover:bg-muted/30"
                    }`}
                  >
                    <div
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isSelected
                          ? "bg-brand-coral text-white"
                          : "bg-brand-coral/10 text-brand-coral"
                      }`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="font-semibold">{service.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Select Industry */}
        {step === 1 && (
          <div className="animate-fade-up">
            <h3 className="text-center text-xl font-bold tracking-tight sm:text-2xl">
              What industry are you in?
            </h3>
            <p className="mx-auto mt-2 max-w-md text-center text-sm text-muted-foreground">
              This helps us prepare relevant case studies for your call.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry) => {
                const Icon = industry.icon;
                const isSelected = selectedIndustry === industry.slug;
                return (
                  <button
                    key={industry.slug}
                    onClick={() => setSelectedIndustry(industry.slug)}
                    className={`group flex items-center gap-3 rounded-xl border-2 px-4 py-3.5 text-left transition-all duration-200 ${
                      isSelected
                        ? "border-brand-coral bg-brand-coral/5 shadow-sm"
                        : "border-border/50 bg-card hover:border-brand-coral/30 hover:bg-muted/30"
                    }`}
                  >
                    <div
                      className="flex size-9 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: isSelected ? undefined : industry.color,
                      }}
                      {...(isSelected && {
                        className:
                          "flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-coral",
                      })}
                    >
                      <Icon
                        className={`size-4 ${isSelected ? "text-white" : "text-brand-dark"}`}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{industry.name}</p>
                      <p className="text-[11px] text-muted-foreground">
                        {industry.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
              {/* Other option */}
              <button
                onClick={() => setSelectedIndustry("other")}
                className={`group flex items-center gap-3 rounded-xl border-2 px-4 py-3.5 text-left transition-all duration-200 ${
                  selectedIndustry === "other"
                    ? "border-brand-coral bg-brand-coral/5 shadow-sm"
                    : "border-border/50 bg-card hover:border-brand-coral/30 hover:bg-muted/30"
                }`}
              >
                <div
                  className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${
                    selectedIndustry === "other"
                      ? "bg-brand-coral"
                      : "bg-muted"
                  }`}
                >
                  <MessageSquare
                    className={`size-4 ${
                      selectedIndustry === "other"
                        ? "text-white"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">Other</p>
                  <p className="text-[11px] text-muted-foreground">
                    Not listed above
                  </p>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Date & Time */}
        {step === 2 && (
          <div className="animate-fade-up">
            <h3 className="text-center text-xl font-bold tracking-tight sm:text-2xl">
              Pick a date & time
            </h3>
            <p className="mx-auto mt-2 max-w-md text-center text-sm text-muted-foreground">
              All times are in your local timezone. Calls are 30 minutes.
            </p>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto]">
              {/* Calendar */}
              <div className="rounded-xl border border-border/50 bg-card p-6">
                {/* Month nav */}
                <div className="mb-4 flex items-center justify-between">
                  <button
                    onClick={prevMonth}
                    disabled={isPrevDisabled}
                    className="flex size-9 items-center justify-center rounded-lg transition-colors hover:bg-muted disabled:opacity-30"
                  >
                    <ArrowLeft className="size-4" />
                  </button>
                  <h4 className="text-sm font-semibold">
                    {MONTHS[calMonth]} {calYear}
                  </h4>
                  <button
                    onClick={nextMonth}
                    className="flex size-9 items-center justify-center rounded-lg transition-colors hover:bg-muted"
                  >
                    <ArrowRight className="size-4" />
                  </button>
                </div>

                {/* Day headers */}
                <div className="mb-2 grid grid-cols-7 gap-1">
                  {WEEKDAYS.map((d) => (
                    <div
                      key={d}
                      className="py-2 text-center text-[11px] font-medium text-muted-foreground"
                    >
                      {d}
                    </div>
                  ))}
                </div>

                {/* Days grid */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, i) => {
                    if (day === null) {
                      return <div key={`empty-${i}`} />;
                    }
                    const disabled = isDateDisabled(day);
                    const selected = isDateSelected(day);
                    return (
                      <button
                        key={day}
                        disabled={disabled}
                        onClick={() =>
                          setSelectedDate(new Date(calYear, calMonth, day))
                        }
                        className={`flex size-10 items-center justify-center rounded-lg text-sm transition-all ${
                          selected
                            ? "bg-brand-coral font-semibold text-white"
                            : disabled
                              ? "cursor-not-allowed text-muted-foreground/30"
                              : "hover:bg-brand-coral/10 hover:text-brand-coral"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time slots */}
              <div className="w-full lg:w-56">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {selectedDate
                    ? selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "short",
                        day: "numeric",
                      })
                    : "Select a date first"}
                </p>
                <div className="grid max-h-[360px] grid-cols-2 gap-2 overflow-y-auto lg:grid-cols-1">
                  {TIME_SLOTS.map((time) => (
                    <button
                      key={time}
                      disabled={!selectedDate}
                      onClick={() => setSelectedTime(time)}
                      className={`rounded-lg border px-3 py-2.5 text-sm transition-all ${
                        selectedTime === time
                          ? "border-brand-coral bg-brand-coral font-medium text-white"
                          : selectedDate
                            ? "border-border/50 hover:border-brand-coral/30 hover:bg-brand-coral/5"
                            : "cursor-not-allowed border-border/30 text-muted-foreground/40"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Your Details */}
        {step === 3 && (
          <div className="animate-fade-up">
            <h3 className="text-center text-xl font-bold tracking-tight sm:text-2xl">
              Almost there!
            </h3>
            <p className="mx-auto mt-2 max-w-md text-center text-sm text-muted-foreground">
              Tell us a bit about yourself so we can prepare for the call.
            </p>

            <div className="mx-auto mt-8 max-w-xl space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Full Name <span className="text-brand-coral">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Work Email <span className="text-brand-coral">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  What would you like to discuss?
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project, timeline, budget, or any specific questions..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {/* Summary */}
              <div className="rounded-xl border border-border/50 bg-muted/30 px-5 py-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Booking Summary
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="gap-1.5 px-3 py-1">
                    <Briefcase className="size-3" />
                    {services.find((s) => s.slug === selectedService)?.title}
                  </Badge>
                  <Badge variant="secondary" className="gap-1.5 px-3 py-1">
                    <Building2 className="size-3" />
                    {selectedIndustry === "other"
                      ? "Other"
                      : industries.find((ind) => ind.slug === selectedIndustry)
                          ?.name}
                  </Badge>
                  <Badge variant="secondary" className="gap-1.5 px-3 py-1">
                    <Calendar className="size-3" />
                    {selectedDate?.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </Badge>
                  <Badge variant="secondary" className="gap-1.5 px-3 py-1">
                    <Clock className="size-3" />
                    {selectedTime}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => setStep(step - 1)}
          disabled={step === 0}
          className={step === 0 ? "invisible" : ""}
        >
          <ArrowLeft className="mr-2 size-4" />
          Back
        </Button>

        {step < STEPS.length - 1 ? (
          <Button
            onClick={() => setStep(step + 1)}
            disabled={!canGoNext()}
            className="bg-brand-coral hover:bg-brand-coral/90 disabled:opacity-50"
          >
            Continue
            <ArrowRight className="ml-2 size-4" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!canGoNext()}
            className="bg-brand-coral hover:bg-brand-coral/90 disabled:opacity-50"
          >
            Schedule Call
            <CheckCircle2 className="ml-2 size-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
