"""Generated client library for workflowexecutions version v1alpha1."""
# NOTE: This file is autogenerated and should not be edited by hand.

from __future__ import absolute_import

from apitools.base.py import base_api
from googlecloudsdk.generated_clients.apis.workflowexecutions.v1alpha1 import workflowexecutions_v1alpha1_messages as messages


class WorkflowexecutionsV1alpha1(base_api.BaseApiClient):
  """Generated client library for service workflowexecutions version v1alpha1."""

  MESSAGES_MODULE = messages
  BASE_URL = 'https://workflowexecutions.googleapis.com/'
  MTLS_BASE_URL = 'https://workflowexecutions.mtls.googleapis.com/'

  _PACKAGE = 'workflowexecutions'
  _SCOPES = ['https://www.googleapis.com/auth/cloud-platform']
  _VERSION = 'v1alpha1'
  _CLIENT_ID = 'CLIENT_ID'
  _CLIENT_SECRET = 'CLIENT_SECRET'
  _USER_AGENT = 'google-cloud-sdk'
  _CLIENT_CLASS_NAME = 'WorkflowexecutionsV1alpha1'
  _URL_VERSION = 'v1alpha1'
  _API_KEY = None

  def __init__(self, url='', credentials=None,
               get_credentials=True, http=None, model=None,
               log_request=False, log_response=False,
               credentials_args=None, default_global_params=None,
               additional_http_headers=None, response_encoding=None):
    """Create a new workflowexecutions handle."""
    url = url or self.BASE_URL
    super(WorkflowexecutionsV1alpha1, self).__init__(
        url, credentials=credentials,
        get_credentials=get_credentials, http=http, model=model,
        log_request=log_request, log_response=log_response,
        credentials_args=credentials_args,
        default_global_params=default_global_params,
        additional_http_headers=additional_http_headers,
        response_encoding=response_encoding)
    self.projects_locations_workflows_executions = self.ProjectsLocationsWorkflowsExecutionsService(self)
    self.projects_locations_workflows = self.ProjectsLocationsWorkflowsService(self)
    self.projects_locations = self.ProjectsLocationsService(self)
    self.projects = self.ProjectsService(self)

  class ProjectsLocationsWorkflowsExecutionsService(base_api.BaseApiService):
    """Service class for the projects_locations_workflows_executions resource."""

    _NAME = 'projects_locations_workflows_executions'

    def __init__(self, client):
      super(WorkflowexecutionsV1alpha1.ProjectsLocationsWorkflowsExecutionsService, self).__init__(client)
      self._upload_configs = {
          }

    def Cancel(self, request, global_params=None):
      r"""Cancels a workflow execution of the given name.

      Args:
        request: (WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Execution) The response message.
      """
      config = self.GetMethodConfig('Cancel')
      return self._RunMethod(
          config, request, global_params=global_params)

    Cancel.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1alpha1/projects/{projectsId}/locations/{locationsId}/workflows/{workflowsId}/executions/{executionsId}:cancel',
        http_method='POST',
        method_id='workflowexecutions.projects.locations.workflows.executions.cancel',
        ordered_params=['name'],
        path_params=['name'],
        query_params=[],
        relative_path='v1alpha1/{+name}:cancel',
        request_field='cancelExecutionRequest',
        request_type_name='WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest',
        response_type_name='Execution',
        supports_download=False,
    )

    def Create(self, request, global_params=None):
      r"""Creates a new workflow execution using the latest version of the workflow.

      Args:
        request: (WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Execution) The response message.
      """
      config = self.GetMethodConfig('Create')
      return self._RunMethod(
          config, request, global_params=global_params)

    Create.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1alpha1/projects/{projectsId}/locations/{locationsId}/workflows/{workflowsId}/executions',
        http_method='POST',
        method_id='workflowexecutions.projects.locations.workflows.executions.create',
        ordered_params=['parent'],
        path_params=['parent'],
        query_params=[],
        relative_path='v1alpha1/{+parent}/executions',
        request_field='execution',
        request_type_name='WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest',
        response_type_name='Execution',
        supports_download=False,
    )

    def Get(self, request, global_params=None):
      r"""Returns a workflow execution with the specified name.

      Args:
        request: (WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (Execution) The response message.
      """
      config = self.GetMethodConfig('Get')
      return self._RunMethod(
          config, request, global_params=global_params)

    Get.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1alpha1/projects/{projectsId}/locations/{locationsId}/workflows/{workflowsId}/executions/{executionsId}',
        http_method='GET',
        method_id='workflowexecutions.projects.locations.workflows.executions.get',
        ordered_params=['name'],
        path_params=['name'],
        query_params=[],
        relative_path='v1alpha1/{+name}',
        request_field='',
        request_type_name='WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest',
        response_type_name='Execution',
        supports_download=False,
    )

    def List(self, request, global_params=None):
      r"""Returns a list of workflow executions which belong to the workflow with the specified name. The method returns executions from all workflow versions.

      Args:
        request: (WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest) input message
        global_params: (StandardQueryParameters, default: None) global arguments
      Returns:
        (ListExecutionsResponse) The response message.
      """
      config = self.GetMethodConfig('List')
      return self._RunMethod(
          config, request, global_params=global_params)

    List.method_config = lambda: base_api.ApiMethodInfo(
        flat_path='v1alpha1/projects/{projectsId}/locations/{locationsId}/workflows/{workflowsId}/executions',
        http_method='GET',
        method_id='workflowexecutions.projects.locations.workflows.executions.list',
        ordered_params=['parent'],
        path_params=['parent'],
        query_params=['filter', 'pageSize', 'pageToken'],
        relative_path='v1alpha1/{+parent}/executions',
        request_field='',
        request_type_name='WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest',
        response_type_name='ListExecutionsResponse',
        supports_download=False,
    )

  class ProjectsLocationsWorkflowsService(base_api.BaseApiService):
    """Service class for the projects_locations_workflows resource."""

    _NAME = 'projects_locations_workflows'

    def __init__(self, client):
      super(WorkflowexecutionsV1alpha1.ProjectsLocationsWorkflowsService, self).__init__(client)
      self._upload_configs = {
          }

  class ProjectsLocationsService(base_api.BaseApiService):
    """Service class for the projects_locations resource."""

    _NAME = 'projects_locations'

    def __init__(self, client):
      super(WorkflowexecutionsV1alpha1.ProjectsLocationsService, self).__init__(client)
      self._upload_configs = {
          }

  class ProjectsService(base_api.BaseApiService):
    """Service class for the projects resource."""

    _NAME = 'projects'

    def __init__(self, client):
      super(WorkflowexecutionsV1alpha1.ProjectsService, self).__init__(client)
      self._upload_configs = {
          }
