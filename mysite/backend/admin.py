from django.contrib import admin

from .models import UserInfo, SubscriptionType, Service, Office, Organization, Subscriber, Officer, OrganizationMember, TransferredSubscription

admin.site.register(UserInfo)
admin.site.register(SubscriptionType)
admin.site.register(Subscriber)
admin.site.register(Service)
admin.site.register(Officer)
admin.site.register(Office)
admin.site.register(OrganizationMember)
admin.site.register(Organization)
admin.site.register(TransferredSubscription)