import {
  PaymentStatus,
  Role,
} from "../../generated/prisma/enums";
import type { RequestUser } from "../middlewares/checkAuth";

type PhoneUser = {
  phone: string | null;
};

export const omitPhone = <T extends PhoneUser>(contact: T) => {
  const { phone: _phone, ...contactWithoutPhone } = contact;
  return contactWithoutPhone;
};

export const projectWorkRequestContact = <T extends PhoneUser>(
  request: T,
  viewer: RequestUser,
) =>
  viewer.role === Role.CITIZEN
    ? request
    : omitPhone(request);

export const omitPhoneAndPassword = <
  T extends PhoneUser & { password?: unknown },
>(
  user: T,
) => {
  const {
    phone: _phone,
    password: _password,
    ...userWithoutSensitiveFields
  } = user;
  return userWithoutSensitiveFields;
};

type AssignmentWithContacts = {
  staff: PhoneUser;
  citizen: PhoneUser;
  staffId: string;
  citizenId: string;
  request: {
    phone: string;
    payments: { status: PaymentStatus }[];
  };
};

export const projectAssignmentContacts = <T extends AssignmentWithContacts>(
  assignment: T,
  viewer: RequestUser,
) => {
  const isPaid = assignment.request.payments.some(
    (payment) => payment.status === PaymentStatus.PAID,
  );
  const isAssignedCitizen =
    viewer.role === Role.CITIZEN &&
    assignment.citizenId === viewer.userId;
  const isAssignedStaff =
    viewer.role === Role.STAFF &&
    assignment.staffId === viewer.userId;

  const {
    phone: staffPhone,
    ...staffWithoutPhone
  } = assignment.staff;
  const {
    phone: citizenPhone,
    ...citizenWithoutPhone
  } = assignment.citizen;
  const {
    phone: requestPhone,
    payments: _payments,
    ...requestWithoutSensitiveData
  } = assignment.request;

  return {
    ...assignment,
    staff: {
      ...staffWithoutPhone,
      ...(isPaid && isAssignedCitizen ? { phone: staffPhone } : {}),
    },
    citizen: {
      ...citizenWithoutPhone,
      ...(isPaid && isAssignedStaff ? { phone: citizenPhone } : {}),
    },
    request: {
      ...requestWithoutSensitiveData,
      ...(isPaid && isAssignedStaff ? { phone: requestPhone } : {}),
    },
  };
};

type QuotationWithContacts = {
  staff: PhoneUser & { password?: unknown };
  request: {
    phone: string;
    payments: { status: PaymentStatus }[];
    assignment: { staffId: string } | null;
  };
};

export const projectQuotationContacts = <T extends QuotationWithContacts>(
  quotation: T,
  viewer: RequestUser,
) => {
  const isPaid = quotation.request.payments.some(
    (payment) => payment.status === PaymentStatus.PAID,
  );
  const isAssignedStaff =
    viewer.role === Role.STAFF &&
    quotation.request.assignment?.staffId === viewer.userId;

  const {
    phone: requestPhone,
    payments: _payments,
    assignment: _assignment,
    ...requestWithoutSensitiveData
  } = quotation.request;

  return {
    ...quotation,
    staff: omitPhoneAndPassword(quotation.staff),
    request: {
      ...requestWithoutSensitiveData,
      ...(isPaid && isAssignedStaff ? { phone: requestPhone } : {}),
    },
  };
};

type SelectedQuotationWithContacts = {
  staff: PhoneUser & { password?: unknown };
  request: { id: string; phone?: string };
};

export const projectSelectedQuotation = <
  T extends SelectedQuotationWithContacts,
>(
  quotation: T,
) => {
  const { phone: requestPhone, ...requestWithoutPhone } = quotation.request;

  return {
    ...quotation,
    staff: omitPhoneAndPassword(quotation.staff),
    request: requestWithoutPhone,
  };
};
