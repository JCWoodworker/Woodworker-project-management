export const convertPhoneNumber = (phoneNumber) => {
  let phone = phoneNumber.split('')
  phone.splice(3, 0, '-')
  phone.splice(7, 0, '-')
  const newPhone = phone.join('')
  return newPhone
}