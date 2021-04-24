from django.db import models

# Create your models here.

class UserInfo(models.Model):
    username = models.CharField(max_length=60, primary_key=True)
    password = models.CharField(max_length=8)
    first_name = models.CharField(max_length=60)
    middle_name = models.CharField(max_length=60, null=True)
    last_name = models.CharField(max_length=60)
    email = models.CharField(max_length=60)
    address1 = models.CharField(max_length=60)
    address2 = models.CharField(max_length=60, null=True)
    city = models.CharField(max_length=60)
    state = models.CharField(max_length=60)
    zipcode = models.CharField(max_length=60)
    employer_name = models.CharField(max_length=60, null=True)

    def __str__(self):
        return self.username

class SubscriptionType(models.Model):
    subscription_type_code = models.AutoField(primary_key=True)
    subscription_type_name = models.CharField(max_length=60)

    def __str__(self):
        return self.subscription_type_name

class Service(models.Model):
    service_code = models.AutoField(primary_key=True)
    service_name = models.CharField(max_length=60)
    description = models.CharField(max_length=60)
    premium = models.CharField(max_length=60)
    allocation = models.CharField(max_length=60, null=True)

    def __str__(self):
        return self.service_name

class Office(models.Model):
    office_code = models.AutoField(primary_key=True)
    office_name = models.CharField(max_length=60)
    attribution = models.CharField(max_length=60)

    def __str__(self):
        return self.office_name

class Organization(models.Model):
    organization_code = models.AutoField(primary_key=True)
    organization_name = models.CharField(max_length=60)
    description = models.CharField(max_length=60)
    date_joined = models.DateField()
    address1 = models.CharField(max_length=60)
    address2 = models.CharField(max_length=60)
    city = models.CharField(max_length=60)
    state = models.CharField(max_length=60)
    zipcode = models.CharField(max_length=60)
    phone_number = models.CharField(max_length=60)

    def __str__(self):
        return self.organization_code

class Subscriber(models.Model):
    subscriberID = models.AutoField(primary_key=True)
    username = models.ForeignKey(UserInfo, on_delete=models.CASCADE)
    subscription_type_code = models.ForeignKey(SubscriptionType, on_delete=models.CASCADE)
    service_code = models.ForeignKey(Service, on_delete=models.CASCADE)
    request_date = models.DateField()
    start_date = models.DateField(null=True)
    end_date = models.DateField(null=True)
    motif_of_cancelation = models.CharField(max_length=60, null=True)
    beneficiaryID = models.ForeignKey('self', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.username

class Officer(models.Model):
    officerID = models.AutoField(primary_key=True)
    office_code = models.ForeignKey(Office, on_delete=models.CASCADE)
    subscriberID = models.ForeignKey(Subscriber, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField(null=True)


class OrganizationMember(models.Model):
    MemberID = models.AutoField(primary_key=True)
    organization_code = models.ForeignKey(Organization, on_delete=models.CASCADE)
    subscriberID = models.ForeignKey(Subscriber, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    native_country = models.CharField(max_length=60)
    citizenship = models.CharField(max_length=60)
    is_delegate = models.BooleanField()

    def __str__(self):
        return (self.organization_code,self.subscriberID)

class TransferredSubscription(models.Model):
    transferID = models.AutoField(primary_key=True)
    transfer_from = models.CharField(max_length=60)
    transfer_to = models.CharField(max_length=60)
    request_date = models.DateField()
    transfer_date = models.DateField()
    subscriberID = models.ForeignKey(Subscriber, on_delete=models.CASCADE)

    def __str__(self):
        return self.transferID