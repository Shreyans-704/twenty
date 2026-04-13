# PR #19526 Cleanup Summary

## 🎯 Objective: Clean Address Duplication Fix PR

### ✅ CHANGES KEPT (Address Fix Only)

#### 1. **Backend - Data Transfer Object**
   - File: `place-details-result.dto.ts`
   - Changes: Added `street` field with proper GraphQL type annotation
   - Status: ✓ CORRECT

#### 2. **Backend - Geo Map Service**
   - File: `geo-map.service.ts`
   - Changes:
     - Extract country code from address components
     - Pass country code to `sanitizePlaceDetailsResults` for locale-aware formatting
     - Return properly typed `PlaceDetailsResultDTO` with street field
   - Status: ✓ CORRECT

#### 3. **Backend - Address Sanitization Utility**
   - File: `sanitize-place-details-results.util.ts`
   - Changes:
     - Updated signature to accept `countryCode` parameter
     - Extract street components: `street_number`, `route`, `subpremise`, `premise`
     - Implement locale-aware ordering (route-first for CN, JP, KR; streets-first for others)
     - Build `street` field from these components
   - Status: ✓ CORRECT

#### 4. **Frontend - GraphQL Query**
   - File: `geo-map-appolo.api.ts`
   - Changes: GraphQL query includes `street` field in results
   - Status: ✓ CORRECT

#### 5. **Frontend - Type Definitions**
   - File: `placeApi.ts`
   - Changes: `PlaceDetailsResult` type includes optional `street` field
   - Status: ✓ CORRECT

#### 6. **Frontend - Hook Implementation**
   - File: `useAddressAutocomplete.ts`
   - Changes:
     - Uses `placeData?.street` as first fallback for address street field
     - Prevents full formatted address fallback for non-street locations
   - Status: ✓ CORRECT

### ❌ CHANGES REMOVED

#### 1. **CI/Server Configuration** (project.json)
   - ❌ REVERTED: `start:ci-if-needed` command back to original curl-based health check
   - ❌ REVERTED: Array formatting changes (multi-line back to single-line)
   - Impact: CI/server startup behavior restored to original state

#### 2. **Server Entry Point** (main.ts)
   - ❌ REVERTED: Removed console.log statement for server port
   - ❌ REVERTED: Reverted PORT handling back to using config service directly
   - Impact: Server startup behavior restored

#### 3. **Unrelated Commits** (Not included in final clean PR)
   - Fix: start CI server in background
   - Fix: ensure CI server runs as long-running process
   - Fix: always start server in ci-if-needed
   - Fix: ensure NODE_PORT is parsed correctly
   - Fix: use config service with fallback
   - Fix: ensure server listens on default port in CI
   - Fix: reset generated SDK files
   - Fix: correct checksum expectations
   - Fix: update manifest checksums
   - Fix: resolve CI issues broadly
   - Fix: strip isActive property (unrelated)
   - Chore: lint issues/warnings

---

## 🔍 Validation

### Address Fix Components Verified:
- ✅ Street field correctly derived from `street_number` + `route`
- ✅ Locale-aware ordering for Asian countries (CN, JP, KR)
- ✅ Subpremise/premise support for apartments/buildings
- ✅ Sanitizer signature updated to accept `countryCode`
- ✅ No fallback to full formatted address
- ✅ GraphQL schema includes street field
- ✅ Frontend hook uses street field
- ✅ Type definitions aligned

### Unrelated Changes Removed:
- ✅ project.json: start:ci-if-needed reverted to original
- ✅ main.ts: console.log removed
- ✅ main.ts: port handling back to config service

---

## 📦 Final State

The PR now contains **only minimal, focused changes** needed to fix address duplication:
- No CI/server configuration changes
- No SDK or generated file changes
- No checksum/manifest changes
- No unrelated formatting or refactoring
- Pure address duplication fix

This is now a clean, reviewable PR suitable for focusing on the core issue.
