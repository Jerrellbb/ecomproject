from rest_framework.permissions import BasePermission, SAFE_METHODS


# Here we are creating our own custom permission class to be added to any view that requires object level permissions. 
# In our case, we want any view using the permission class to ensure that the object being updated, created or deleted has the same owner as the request
class IsOwnerOrReadOnly(BasePermission):
  def has_object_permissions(self, request, view, obj):
  # Here we check if the request is a "safe" method (GET, OPTIONS, HEAD) - if it is, we allow access to anyone by returning True
    if request.method in SAFE_METHODS:
      return True
    else:
        # The following line checks if the request.user (making the request) matches the obj.owner (owns the record)
      return request.user == obj.owner