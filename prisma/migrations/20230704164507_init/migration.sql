-- CreateTable
CREATE TABLE "HomeCare" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "medicalId" TEXT NOT NULL,
    "callingTime" TEXT NOT NULL,
    "mltc" TEXT NOT NULL,
    "switchingAgency" TEXT NOT NULL,
    "lookingFor" TEXT NOT NULL,

    CONSTRAINT "HomeCare_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jobs" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "certificate" TEXT NOT NULL,
    "drive" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "available" TEXT NOT NULL,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HealthCheacks" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "medicalId" TEXT NOT NULL,
    "schedule" TEXT NOT NULL,

    CONSTRAINT "HealthCheacks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HealthCheackRepots" (
    "id" SERIAL NOT NULL,
    "height" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "bloodPressure" TEXT NOT NULL,
    "pulseRate" TEXT NOT NULL,
    "currentComplaints" TEXT NOT NULL,
    "bloodGlucose" TEXT NOT NULL,
    "urinTest" TEXT NOT NULL,
    "recomendationByRN" TEXT NOT NULL,
    "nextFollowUpDate" TEXT NOT NULL,

    CONSTRAINT "HealthCheackRepots_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HomeCare_email_key" ON "HomeCare"("email");

-- CreateIndex
CREATE UNIQUE INDEX "HomeCare_phoneNumber_key" ON "HomeCare"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Jobs_email_key" ON "Jobs"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Jobs_phoneNumber_key" ON "Jobs"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "HealthCheacks_email_key" ON "HealthCheacks"("email");

-- CreateIndex
CREATE UNIQUE INDEX "HealthCheacks_phoneNumber_key" ON "HealthCheacks"("phoneNumber");
