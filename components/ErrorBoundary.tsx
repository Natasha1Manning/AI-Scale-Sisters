"use client"
import React from "react"

export class ErrorBoundary extends React.Component<{ fallback?: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(err: any, info: any) {
    console.error("UI crash:", err, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div style={{ padding: 24, textAlign: "center" }}>
            <h2>Something went wrong</h2>
            <p>Try refreshing — we're fixing it now.</p>
          </div>
        )
      )
    }
    return this.props.children as any
  }
}
